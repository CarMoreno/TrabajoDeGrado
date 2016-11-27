var ecolodApp = angular.module('EcolodApp')
ecolodApp.controller('endpointCtrl', ['$scope', '$route', 'queryService',
    function($scope, $route, queryService) {
    	$scope.ruta = $route
    	$scope.resultado = {}
    	$scope.consultarEndpoint = function(query) {
    		queryService.endpoint(query, $scope.resultado)
    	}
    }

]);