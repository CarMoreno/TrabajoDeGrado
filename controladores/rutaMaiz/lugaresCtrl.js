var ecolodApp = angular.module('EcolodApp')
ecolodApp.controller('lugaresCtrl', ['$scope', '$route', '$http', 'queryService',
    function($scope, $route, $http, queryService) 
    {
        $scope.ruta = $route
        //var query = "PREFIX VCARD: <http://www.w3.org/2006/vcard/ns#> SELECT ?obj WHERE {?sub ?pred ?obj. { SELECT ?sub WHERE { ?sub ?pred VCARD:Location.}}}" 
        var query = "PREFIX UMBEL: <http://umbel.org/umbel#> SELECT ?sub WHERE {?sub  UMBEL:isRelatedTo <http://190.14.254.237/dataseteco/RutaDelMaiz/Lugares>.}"
        queryService.getResults($scope, query);
    }
])