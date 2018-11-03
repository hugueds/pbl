require('console-stamp')(console, '[dd/mm HH:MM:ss.l]');
const dotenv = require('dotenv').config();
const express = require('express');
const app = require('express')();
const path = require('path');
const favicon = require('serve-favicon');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const http = require('http').Server(app);
const io = require('socket.io', { forceNew: true, 'multiplex': false })(http);
const auth = require('basic-auth');

require('./db/connect');

const PartMissing = require('./models/PartMissing');

const PORT = process.env.PORT || 8083;

const index = require('./routes/index');
const logisticBuffers = require('./routes/buffers');

const clients = [];

io.on('connection', function(socket) {

    console.log('A CLIENT HAS CONNECTED! ' + socket.request.connection.remoteAddress, new Date().toLocaleString());

    clients.push(socket);

    socket.on('dec-part', (data) => {
        if (typeof(data) !== 'object') data = JSON.parse(data);
        const part = new PartMissing(data);
        part.date = new Date();
        part.save();        
        io.emit('dec-part', part);
        io.emit('list update', part);
    });

    socket.on('deleted-part', (data) => {
        io.emit('dec-part', { mute: true });
        console.log('Part deleted');
    });

    socket.on('confirm part', (part) => {        
        if (!part || !part._id) {            
            return;
        }
        PartMissing.remove({_id: part._id}).then((res) => {
            console.log(`Part ${part.part} removed from partmissing`);
            io.emit('list update', {mute: true});
        });        
    });


    socket.on('disconnect', function() {
        let idx = clients.indexOf(socket);
        clients.splice(idx, 1);
        console.log('SOCKET ID:' + socket.id + ' desconectado');
    });

    socket.on('ip', () => socket.emit('my ip', socket.request.connection.remoteAddress))

    io.emit('newConnection', socket.request.connection.remoteAddress);

});

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type');
    next();
});

// uncomment after placing your favicon in /public
//.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
//.use(logger('dev'))
// app.set('views', path.join(__dirname, 'views')) // view engine setup
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/', index)
app.use('/buffers', logisticBuffers)
app.use(cookieParser())


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
})

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

http.listen(PORT, function() {
    console.log("Server Connected at PORT: " + PORT + "  " + new Date().toDateString());
});

module.exports = http;