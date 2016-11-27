var ecolodApp = angular.module('EcolodApp')
ecolodApp.controller('referenciasCtrl', ['$scope', '$route', 'queryService',
    function($scope, $route) {
    	$scope.ruta = $route
    }

]);