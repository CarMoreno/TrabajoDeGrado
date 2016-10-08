var app = angular.module('EcolodApp')
app.controller('rutaMaizCtrl', ['$scope', '$route', '$http', '$uibModal', 'modalService', 'queryService',
    function($scope, $route, $http, $uibModal, modalService, queryService) 
    {
        qdefault = 'PREFIX UMBEL: <http://umbel.org/umbel#> SELECT DISTINCT ?sub WHERE { ?sub  UMBEL:isRelatedTo <http://190.14.254.237/dataseteco/RutaDelMaiz/Lugares>. }'
        queryService.setArray(qdefault, "Lugares", $scope)
        $scope.map = { center: { latitude: 4.0744162, longitude: -76.2051463 }, zoom: 13 };
        $scope.marker = {}
        $scope.window = {}
        $scope.ruta = $route;
        $scope.rutaCategorias = {'fauna':'pages/rutaMaiz/fauna.html', 'flora':'pages/rutaMaiz/flora.html', 'alojamientos':'pages/rutaMaiz/alojamientos.html',
        'restaurantes':'pages/rutaMaiz/restaurantes.html', 'lugares':'pages/rutaMaiz/lugares.html', 'empresas':'pages/rutaMaiz/empresas.html',
        'eventos': 'pages/rutaMaiz/eventos.html' }   
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