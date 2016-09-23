var app = angular.module('EcolodApp')
app.controller('modalCtrl', ['$scope', 'queryService', 'modalService', '$uibModalInstance', 'parametro', 'categoria', 'ruta', 
	function ($scope, queryService, modalService, $uibModalInstance, parametro, categoria, ruta)
 	{
		//console.log("(parametro, categoria, ruta, $scope.dato) = ("+parametro+", "+categoria+", "+ruta+", "+$scope.dato+")")
		modalService.selectOne(categoria, ruta, parametro, $scope)
		$scope.cancel = function() { $uibModalInstance.dismiss('cancel') } // funcion para cerrar el modal
	}
]);