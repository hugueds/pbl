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

var mongoose = require('./db/connect');

var PartMissing = require('./models/PartMissing');

const PORT = process.env.PORT || 8080;

const index = require('./routes/index');
const logisticBuffers = require('./routes/buffers');

var clients = [];

io.on('connection', function (socket) {

    console.log('A CLIENT HAS CONNECTED! ' + socket.request.connection.remoteAddress, new Date().toLocaleString());

    clients.push(socket);

    socket.on('dec-part', (data) => {
        if (typeof (data) !== 'object') data = JSON.parse(data);
        let part = new PartMissing(data);
        part.date = new Date();        
        io.emit('dec-part', data);
        part.save();
    })

    socket.on('deleted-part', (data) => {
        io.emit('dec-part');
        console.log("Part deleted");
    })


    socket.on('disconnect', function () {
        let idx = clients.indexOf(socket);
        clients.splice(idx, 1);
        console.log('SOCKET ID:' + socket.id + ' desconectado');
    });

    socket.on('ip', () => 

    io.emit('newConnection', socket.request.connection.remoteAddress);

});

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// uncomment after placing your favicon in /public
//.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
//.use(logger('dev'))
app.set('views', path.join(__dirname, 'views')) // view engine setup
app.set('view engine', 'ejs')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/', index)
app.use('/buffers', logisticBuffers)
app.use(cookieParser())
app.use(express.static('public'))

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
})

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

http.listen(PORT, function () {
    console.log("Server Connected at PORT: " + PORT + "  " + new Date().toDateString());
});

module.exports = http;
