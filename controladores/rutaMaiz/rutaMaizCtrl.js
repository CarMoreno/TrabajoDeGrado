var ecolodApp = angular.module('EcolodApp')
ecolodApp.controller('rutaMaizCtrl', ['$scope', '$route', 
	function ($scope, $route) {
		$scope.ruta = $route
	}
])