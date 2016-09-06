var ecolodApp = angular.module('EcolodApp')
ecolodApp.controller('inicioCtrl', ['$scope', '$route', 'queryService', '$location',
    function($scope, $route, queryService, $location) 
    {
        $scope.ruta = $route;         

        /**
         * [irAResultados description]
         * @param  {[type]} busqueda [description]
         * @return {[type]}          [description]
         */
        $scope.irAResultados = function(busqueda)
        {
            queryService.setCriterioConsulta(busqueda);
            $location.path('/resultado');
        }; 
    }
]);