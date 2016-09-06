var app = angular.module('EcolodApp')

app.controller('floraMaizCtrl', ['$scope', '$route', '$http', 'queryService',
    function($scope, $route, $http, queryService) 
    {
        $scope.ruta = $route;
        var query = "PREFIX UMBEL: <http://umbel.org/umbel#> SELECT DISTINCT ?sub WHERE {?sub  UMBEL:isRelatedTo <http://190.14.254.237/dataseteco/RutaDelMaiz/Flora>.}";
        //var query = "PREFIX wd: <http://purl.org/ontology/wo/> SELECT ?obj WHERE {?sub ?pred ?obj. { SELECT ?sub WHERE { ?sub wd:kingdomName 'Vegetal'.}}}" 
        queryService.getResults($scope, query);
    }
]);