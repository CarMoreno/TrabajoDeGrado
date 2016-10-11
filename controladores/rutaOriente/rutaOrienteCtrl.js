var app = angular.module('EcolodApp')
app.controller('rutaOrienteCtrl', ['$scope', '$route', '$http', '$uibModal', 'modalService', 'queryService', 'mapService',
    function($scope, $route, $http, $uibModal, modalService, queryService, mapService) 
    {
        qdefault = 'PREFIX UMBEL: <http://umbel.org/umbel#> SELECT DISTINCT ?sub WHERE { ?sub  UMBEL:isRelatedTo <http://190.14.254.237/dataseteco/RutaVueltaAOriente/Lugares>. }'
        $scope.ruta = $route;
        $scope.map = { center: { latitude: 4.0744162, longitude: -76.2051463 }, zoom: 13 };
        $scope.marker = {}
        $scope.window = {}
        $scope.rutaCategorias = {'fauna':'pages/rutaOriente/fauna.html', 'flora':'pages/rutaOriente/flora.html', 'alojamientos':'pages/rutaOriente/alojamientos.html',
        'restaurantes':'pages/rutaOriente/restaurantes.html', 'lugares':'pages/rutaOriente/lugares.html', 'empresas':'pages/rutaOriente/empresas.html',
        'eventos': 'pages/rutaOriente/eventos.html' }   
        queryService.setArray(qdefault, "Lugares", $scope)
        mapService.getPath('RutaMaiz', $scope.marker)
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
                    },
                    scope_marker: function() {
                        return $scope.marker
                    },
                    scope_window: function() {
                        return $scope.window
                    }
                }
            })
        }
    }
]);