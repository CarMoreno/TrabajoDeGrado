var ecolodApp = angular.module('EcolodApp')
ecolodApp.controller('rutaAgricolaCtrl', ['$scope', '$route', 
	function ($scope, $route) {
		$scope.ruta = $route
	}
])