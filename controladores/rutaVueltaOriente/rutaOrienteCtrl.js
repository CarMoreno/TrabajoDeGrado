var ecolodApp = angular.module('EcolodApp')
ecolodApp.controller('rutaOrienteCtrl', ['$scope', '$route', 
	function ($scope, $route) {
		$scope.ruta = $route
	}
])