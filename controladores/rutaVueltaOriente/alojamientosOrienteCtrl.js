var ecolodApp = angular.module('EcolodApp')
ecolodApp.controller('alojamientosOrienteCtrl', ['$scope', '$route', 'queryService',
    function($scope, $route, queryService) 
    {
        $scope.ruta = $route;
        var query = "PREFIX UMBEL: <http://umbel.org/umbel#> SELECT ?sub WHERE {?sub  UMBEL:isRelatedTo <http://190.14.254.237/dataseteco/RutaVueltaAOriente/Alojamientos>.}";
        queryService.getResults($scope, query);
    }
])