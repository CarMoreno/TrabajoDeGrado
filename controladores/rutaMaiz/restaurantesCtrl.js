var ecolodApp = angular.module('EcolodApp')
ecolodApp.controller('restaurantesCtrl', ['$scope', '$route', '$http', 'queryService',
    function($scope, $route, $http, queryService) 
    {
        $scope.ruta = $route
        //var query = "PREFIX GR: <http://purl.org/goodrelations/v1#> SELECT ?obj WHERE {?sub ?pred ?obj. { SELECT ?sub WHERE { ?sub ?pred GR:Location.}}}" 
        //var query = "PREFIX GR: <http://purl.org/goodrelations/v1#> SELECT ?sub WHERE { ?sub ?pred GR:Location.} ORDER BY ?sub"
        var query = "PREFIX UMBEL: <http://umbel.org/umbel#> SELECT ?sub WHERE {?sub  UMBEL:isRelatedTo <http://190.14.254.237/dataseteco/RutaDelMaiz/Restaurantes>.}"
        queryService.getResults($scope, query);
    }
])