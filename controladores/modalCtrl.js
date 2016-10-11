var app = angular.module('EcolodApp')
app.controller('modalCtrl', ['$scope', 'queryService', 'modalService', 'mapService', '$uibModalInstance', 'parametro', 'categoria', 'ruta', 'scope_marker', 'scope_window',
	function ($scope, queryService, modalService, mapService, $uibModalInstance, parametro, categoria, ruta, scope_marker, scope_window)
 	{ 	
		mapService.init(categoria, ruta, parametro, scope_marker, scope_window)
		modalService.selectOne(categoria, ruta, parametro, $scope)
		$scope.cancel = function() { $uibModalInstance.dismiss('cancel') } // funcion para cerrar el modal
	}
]);