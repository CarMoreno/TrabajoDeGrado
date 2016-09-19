var app = angular.module('EcolodApp')

app.controller('rutaMaizCtrl', ['$scope', '$route', '$http', '$uibModal', 'queryService',
    function($scope, $route, $http, $uibModal, queryService, modalService) 
    {
        $scope.ruta = $route;
        // $scope.fauna = []
        // $scope.flora = []
        // $scope.alojamientos = []
        // $scope.restaurantes = []
        // $scope.lugares = []
        // $scope.eventos = []
        // $scope.empresas = []
        /*array de objetos, cada par clave/valor del objeto sigue la estructura
        {"consulta": "sparql",
         "array": $scope.categoria
        }*/
        var arrayQuery = [
            {"consulta": "PREFIX UMBEL: <http://umbel.org/umbel#> SELECT DISTINCT ?sub WHERE {?sub  UMBEL:isRelatedTo <http://190.14.254.237/dataseteco/RutaDelMaiz/Fauna>.}" },
            {"consulta": "PREFIX UMBEL: <http://umbel.org/umbel#> SELECT DISTINCT ?sub WHERE {?sub  UMBEL:isRelatedTo <http://190.14.254.237/dataseteco/RutaDelMaiz/Flora>.}" },
            {"consulta": "PREFIX UMBEL: <http://umbel.org/umbel#> SELECT ?sub WHERE {?sub  UMBEL:isRelatedTo <http://190.14.254.237/dataseteco/RutaDelMaiz/Alojamientos>.}" },
            {"consulta": "PREFIX UMBEL: <http://umbel.org/umbel#> SELECT ?sub WHERE {?sub  UMBEL:isRelatedTo <http://190.14.254.237/dataseteco/RutaDelMaiz/Restaurantes>.}" },
            {"consulta": "PREFIX UMBEL: <http://umbel.org/umbel#> SELECT ?sub WHERE {?sub  UMBEL:isRelatedTo <http://190.14.254.237/dataseteco/RutaDelMaiz/Lugares>.}"},
            {"consulta": "PREFIX UMBEL: <http://umbel.org/umbel#> SELECT ?sub WHERE {?sub  UMBEL:isRelatedTo <http://190.14.254.237/dataseteco/RutaDelMaiz/Eventos>.}" },
            {"consulta": "PREFIX UMBEL: <http://umbel.org/umbel#> SELECT ?sub WHERE {?sub  UMBEL:isRelatedTo <http://190.14.254.237/dataseteco/RutaDelMaiz/Empresas>.} ORDER BY ?sub"}
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