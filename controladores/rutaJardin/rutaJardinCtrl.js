var app = angular.module('EcolodApp')
app.controller('rutaJardinCtrl', ['$scope', '$route', '$http', '$uibModal', 'modalService', 'queryService',
    function($scope, $route, $http, $uibModal, modalService, queryService) 
    {
        qdefault = 'PREFIX UMBEL: <http://umbel.org/umbel#> SELECT DISTINCT ?sub WHERE { ?sub  UMBEL:isRelatedTo <http://190.14.254.237/dataseteco/RutaDelJardinBotanico/Lugares>. }'
        queryService.setArray(qdefault, "Lugares", $scope)
        $scope.map = { center: { latitude: 4.0744162, longitude: -76.2051463 }, zoom: 13 };
        $scope.marker = {}
        $scope.window = {}
        $scope.ruta = $route;
        $scope.rutaCategorias = {'fauna':'pages/rutaJardin/fauna.html', 'flora':'pages/rutaJardin/flora.html', 'alojamientos':'pages/rutaJardin/alojamientos.html',
        'restaurantes':'pages/rutaJardin/restaurantes.html', 'lugares':'pages/rutaJardin/lugares.html', 'empresas':'pages/rutaJardin/empresas.html',
        'eventos': 'pages/rutaJardin/eventos.html' }

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