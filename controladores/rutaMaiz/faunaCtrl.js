var ecolodApp = angular.module('EcolodApp')
ecolodApp.controller('faunaCtrl', ['$scope', '$route', '$http', 'queryService',
	function($scope, $route, $http, queryService) 
    {
        $scope.ruta = $route;
        //var query = "PREFIX wd: <http://purl.org/ontology/wo/> SELECT ?sub ?pred ?obj WHERE {?sub ?pred ?obj. { SELECT ?sub WHERE { ?sub wd:kingdomName 'Animal'.}}} ORDER BY ?sub";
        var query = "PREFIX UMBEL: <http://umbel.org/umbel#> SELECT DISTINCT ?sub WHERE {?sub  UMBEL:isRelatedTo <http://190.14.254.237/dataseteco/RutaDelMaiz/Fauna>.}"
        queryService.getResults($scope, query);
    }
]);