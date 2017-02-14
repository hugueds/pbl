(function() {
    angular.module('pbl-service', [])
        .factory('pbl', pblService);
})();


function pblService($http) {

    var o = {
        parts: []
    };

    o.getMissingParts = function() {
        return $http.get('/cel/1/parts') //HARD CODED
            .success(function(data) {
                angular.copy(data, o.parts);
            })
            .error(function(err) { console.error(err); });
    };


    o.addMissingPart = function(part) {
        return $http.post('/cel/1/parts', part)
            .success(function(data) {
                console.log("Peça inserida na lista de faltantes");
                o.getMissingParts();
            })
            .error(function(err) { console.error(err); });
    };

    o.removeMissingPart = function(id) {
        return $http.delete('/cel/1/parts/' + id)
            .success(function(data) {
                console.log("Peça removida com sucesso");
                o.getMissingParts();
            })
            .error(function(err) { console.error(err); });
    };

    return o;
}