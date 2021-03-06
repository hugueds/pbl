(function() {
    angular.module('pbl-controller', ['socket-service'])
        .controller('PickByLight', pblCtrlfunction);
})();

function pblCtrlfunction($scope, socket, pbl) {

    pbl.getMissingParts();

    $scope.parts = pbl.parts;

    $scope.test = function() {
        var a, b, c, part;
        a = Math.floor((Math.random() * 100000000) + 10000000);
        b = Math.floor((Math.random() * 100) + 1);
        c = Math.floor((Math.random() * 100) + 1);
        part = {
            part: a,
            buffer: b,
            module: c
        }
        socket.emit('dec-part', part);
    }

    socket.on('dec-part', function(data) {
        pbl.getMissingParts();
        $scope.parts = pbl.parts;
    });

    $scope.removePart = function(part) {
        console.log(part);
        pbl.removeMissingPart(part._id);
        var index = $scope.parts.indexOf(part);
        $scope.parts.splice(index, 1);
        pbl.getMissingParts();
        $scope.parts = pbl.parts;
    };

}




/*
Significado locação (etiquetas geradas no SIMAS)

Exemplo: 59CTX11SF 22
Onde:
59 = buffer
CT = chassis truck
X = peça volumosa
11 = Função 1.1
SF = abreviação da pré-montagem
22 = módulo do buffer em que a peça fica alocada
*/