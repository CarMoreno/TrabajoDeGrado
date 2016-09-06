var ecolodApp = angular.module('EcolodApp')
ecolodApp.controller('faunaJardinCtrl', ['$scope', '$route', '$http', 'queryService',
	function($scope, $route, $http, queryService) 
    {
        $scope.ruta = $route;
        var query = "PREFIX UMBEL: <http://umbel.org/umbel#> SELECT DISTINCT ?sub WHERE {?sub  UMBEL:isRelatedTo <http://190.14.254.237/dataseteco/RutaDelJardinBotanico/Fauna>.}"
        queryService.getResults($scope, query);
    }
]);