var app = angular.module('EcolodApp')
app.controller('modalCtrl', ['$scope', 'queryService', 'modalService', 'mapService', 'uiGmapGoogleMapApi', '$uibModalInstance', 'parametro', 'categoria', 'ruta', 'scope_marker', 'scope_window',
	function ($scope, queryService, modalService, mapService, uiGmapGoogleMapApi, $uibModalInstance, parametro, categoria, ruta, scope_marker, scope_window)
 	{
 		//console.log(scope_map)
		//console.log("(parametro, categoria, ruta, $scope.dato) = ("+parametro+", "+categoria+", "+ruta+", "+$scope.dato+")")
		uiGmapGoogleMapApi.then(
			function(maps) {
				mapService.init(categoria, ruta, parametro, scope_marker, scope_window)
			})
		modalService.selectOne(categoria, ruta, parametro, $scope)
		$scope.cancel = function() { $uibModalInstance.dismiss('cancel') } // funcion para cerrar el modal
	}
]);