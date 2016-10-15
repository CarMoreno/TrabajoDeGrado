var app = angular.module('EcolodApp')
app.controller('rutaMaizCtrl', ['$scope', '$route', '$http', '$uibModal', 'modalService', 'queryService', 'mapService', 'NgMap',
    function($scope, $route, $http, $uibModal, modalService, queryService, mapService, NgMap) 
    {
        NgMap.getMap().then(function(map) {
            $scope.map = map;
        })
        
        $scope.marker = {}
        $scope.window = []
        $scope.ruta = $route;
        $scope.rutaCategorias = {'fauna':'pages/rutaMaiz/fauna.html', 'flora':'pages/rutaMaiz/flora.html', 'alojamientos':'pages/rutaMaiz/alojamientos.html',
        'restaurantes':'pages/rutaMaiz/restaurantes.html', 'lugares':'pages/rutaMaiz/lugares.html', 'empresas':'pages/rutaMaiz/empresas.html',
        'eventos': 'pages/rutaMaiz/eventos.html', 'ruta': 'pages/rutaMaiz/general.html' }   
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