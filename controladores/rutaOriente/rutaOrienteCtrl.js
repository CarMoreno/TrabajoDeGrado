var app = angular.module('EcolodApp')
app.controller('rutaOrienteCtrl', ['$scope', '$route', '$http', '$uibModal', 'modalService', 'queryService', 'mapService',
    function($scope, $route, $http, $uibModal, modalService, queryService, mapService) 
    {
        $scope.ruta = $route;
        $scope.marker = {}
        $scope.window = {}
        $scope.rutaCategorias = {'fauna':'pages/rutaOriente/fauna.html', 'flora':'pages/rutaOriente/flora.html', 'alojamientos':'pages/rutaOriente/alojamientos.html',
        'restaurantes':'pages/rutaOriente/restaurantes.html', 'lugares':'pages/rutaOriente/lugares.html', 'empresas':'pages/rutaOriente/empresas.html',
        'eventos': 'pages/rutaOriente/eventos.html', 'ruta': 'pages/rutaOriente/general.html' }   
        mapService.getPath('RutaOriente', $scope.marker)

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