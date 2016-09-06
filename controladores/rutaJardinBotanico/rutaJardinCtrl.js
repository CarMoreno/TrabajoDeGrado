var ecolodApp = angular.module('EcolodApp')
ecolodApp.controller('rutaJardinCtrl', ['$scope', '$route', 
	function ($scope, $route) {
		$scope.ruta = $route
	}
])