var ecolodApp = angular.module('EcolodApp')
ecolodApp.controller('resultadoCtrl', ['$scope', '$route', 'queryService',
    function($scope, $route, queryService) 
    {
        $scope.ruta = $route;
        var valor = queryService.getCriterioConsulta();

        function consulta(busqueda)
        {
            var query = "SELECT DISTINCT ?sub WHERE { ?sub ?pred ?obj. FILTER (regex(?obj, "+"'"+ busqueda +"'"+")).}";
            queryService.getResults($scope, query);            
        }

        consulta(valor);
    }
])