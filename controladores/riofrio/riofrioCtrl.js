var ecolodApp = angular.module('EcolodApp')
ecolodApp.controller('riofrioCtrl', ['$scope', '$route', 
	function ($scope, $route) {
		$scope.ruta = $route
	}
])