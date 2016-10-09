var app = angular.module('EcolodApp')
app.controller('rutaAgricolaCtrl', ['$scope', '$route', '$http', '$uibModal', 'modalService', 'queryService',
    function($scope, $route, $http, $uibModal, modalService, queryService) 
    {
        qdefault = 'PREFIX UMBEL: <http://umbel.org/umbel#> SELECT DISTINCT ?sub WHERE { ?sub  UMBEL:isRelatedTo <http://190.14.254.237/dataseteco/RutaDelAnilloAgricola/Lugares>. }'
        queryService.setArray(qdefault, "Lugares", $scope)
        $scope.ruta = $route;
        $scope.map = { center: { latitude: 4.0744162, longitude: -76.2051463 }, zoom: 13 };
        $scope.marker = {}
        $scope.window = {}
        $scope.ruta = $route;
        $scope.rutaCategorias = {'fauna':'pages/rutaAgricola/fauna.html', 'flora':'pages/rutaAgricola/flora.html', 'alojamientos':'pages/rutaAgricola/alojamientos.html',
        'restaurantes':'pages/rutaAgricola/restaurantes.html', 'lugares':'pages/rutaAgricola/lugares.html', 'empresas':'pages/rutaAgricola/empresas.html',
        'eventos': 'pages/rutaAgricola/eventos.html' }
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