var ecolodApp = angular.module('EcolodApp')
ecolodApp.controller('eventosRioCtrl', ['$scope', '$route', 'queryService', 'urlService', '$sce',
    function($scope, $route, queryService, urlService, $sce) 
    {
        $scope.ruta = $route; 
        var query = "PREFIX UMBEL: <http://umbel.org/umbel#> SELECT ?sub WHERE {?sub  UMBEL:isRelatedTo <http://190.14.254.237/dataseteco/Riofrio/Eventos>.}"
        queryService.getResults($scope, query)

        $scope.setVideo = function(myVideo)
        {
            urlService.setUrl(myVideo)
        }

        $scope.getVideo = function()
        {
            myUrl = urlService.getUrl()
            return $sce.trustAsResourceUrl(myUrl)
        }
    }
])