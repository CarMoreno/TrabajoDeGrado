var app = angular.module('EcolodApp')
app.controller('riofrioCtrl', ['$scope', '$route', '$http', '$uibModal', 'modalService', 'queryService', 'mapService',
    function($scope, $route, $http, $uibModal, modalService, queryService, mapService) 
    {
        $scope.ruta = $route
        $scope.marker = {}
        $scope.window = {}
        $scope.rutaCategorias = {'fauna':'pages/riofrio/fauna.html', 'flora':'pages/riofrio/flora.html', 'alojamientos':'pages/riofrio/alojamientos.html',
        'restaurantes':'pages/riofrio/restaurantes.html', 'lugares':'pages/riofrio/lugares.html', 'empresas':'pages/riofrio/empresas.html',
        'eventos': 'pages/riofrio/eventos.html', 'ruta': 'pages/riofrio/general.html' }
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