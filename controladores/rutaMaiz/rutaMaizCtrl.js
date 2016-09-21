var app = angular.module('EcolodApp')
app.controller('rutaMaizCtrl', ['$scope', '$route', '$http', '$uibModal', 'queryService', 'modalService', 'mapService',
    function($scope, $route, $http, $uibModal, queryService, modalService, mapService) 
    {
        // console.log(RUTA_MAIZ)
        $scope.ruta = $route;
        mapService.go("RutaDelMaiz")

        var arrayQuery = [
            "PREFIX UMBEL: <http://umbel.org/umbel#> SELECT DISTINCT ?sub WHERE {?sub  UMBEL:isRelatedTo <http://190.14.254.237/dataseteco/RutaDelMaiz/Fauna>.}",
            "PREFIX UMBEL: <http://umbel.org/umbel#> SELECT DISTINCT ?sub WHERE {?sub  UMBEL:isRelatedTo <http://190.14.254.237/dataseteco/RutaDelMaiz/Flora>.}",
            "PREFIX UMBEL: <http://umbel.org/umbel#> SELECT ?sub WHERE {?sub  UMBEL:isRelatedTo <http://190.14.254.237/dataseteco/RutaDelMaiz/Alojamientos>.}",
            "PREFIX UMBEL: <http://umbel.org/umbel#> SELECT ?sub WHERE {?sub  UMBEL:isRelatedTo <http://190.14.254.237/dataseteco/RutaDelMaiz/Restaurantes>.}",
            "PREFIX UMBEL: <http://umbel.org/umbel#> SELECT ?sub WHERE {?sub  UMBEL:isRelatedTo <http://190.14.254.237/dataseteco/RutaDelMaiz/Lugares>.}",
            "PREFIX UMBEL: <http://umbel.org/umbel#> SELECT ?sub WHERE {?sub  UMBEL:isRelatedTo <http://190.14.254.237/dataseteco/RutaDelMaiz/Eventos>.}" ,
            "PREFIX UMBEL: <http://umbel.org/umbel#> SELECT ?sub WHERE {?sub  UMBEL:isRelatedTo <http://190.14.254.237/dataseteco/RutaDelMaiz/Empresas>.} ORDER BY ?sub"
        ]  
        queryService.setArray(arrayQuery, $scope)
        // modalService.initModal($scope, $uibModal)
        $scope.open = function(parametro, categoria, ruta) {
            //
            var instanciaModal = $uibModal.open({
                ariaLabelledBy: 'titulo-modal',
                ariaDescribedBy: 'cuerpo-modal',
                templateUrl: 'pages/modal.html',
                controller: 'modalCtrl',
                resolve: {
                    parametro: function() {
                        return parametro
                    },
                    categoria: function() {
                        return categoria
                    },
                    ruta: function() {
                        return ruta
                    }
                }
            })
        }
    }
]);