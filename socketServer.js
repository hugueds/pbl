const socketIO = require('socket.io');
let io = null;

module.exports = function() {
    return {
        start(httpServer) {
            io = socketIO(httpServer);            
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
        },
        stop(){

        }
    }
}