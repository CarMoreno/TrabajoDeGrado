var app = angular.module('EcolodApp')
app.controller('tabsCtrl', ['$scope', 'queryService',
	function($scope, queryService) {
        //$scope.search = 
		$scope.tabElegida = function(tabName, ruta) {
            if(ruta.indexOf("rutaMaiz") != -1) {
    			query = `PREFIX UMBEL: <http://umbel.org/umbel#> 
                        SELECT DISTINCT ?sub 
                        WHERE {
                          ?sub  UMBEL:isRelatedTo <http://190.14.254.237/dataseteco/RutaDelMaiz/`+tabName+`>. 
                        } ORDER BY ?sub`              
            }
            else if(ruta.indexOf("rutaOriente") != -1) {
                query = `PREFIX UMBEL: <http://umbel.org/umbel#> 
                        SELECT DISTINCT ?sub 
                        WHERE {
                          ?sub  UMBEL:isRelatedTo <http://190.14.254.237/dataseteco/RutaVueltaAOriente/`+tabName+`>. 
                        } ORDER BY ?sub`   
            }
            else if(ruta.indexOf("rutaJardin") != -1) {
                query = `PREFIX UMBEL: <http://umbel.org/umbel#> 
                        SELECT DISTINCT ?sub 
                        WHERE {
                          ?sub  UMBEL:isRelatedTo <http://190.14.254.237/dataseteco/RutaDelJardinBotanico/`+tabName+`>. 
                        } ORDER BY ?sub`   
            }
            else if(ruta.indexOf("rutaAgricola") != -1) {
                query = `PREFIX UMBEL: <http://umbel.org/umbel#> 
                        SELECT DISTINCT ?sub 
                        WHERE {
                          ?sub  UMBEL:isRelatedTo <http://190.14.254.237/dataseteco/RutaDelAnilloAgricola/`+tabName+`>. 
                        } ORDER BY ?sub`   
            }
            else {
                query = `PREFIX UMBEL: <http://umbel.org/umbel#> 
                        SELECT DISTINCT ?sub 
                        WHERE {
                          ?sub  UMBEL:isRelatedTo <http://190.14.254.237/dataseteco/Riofrio/`+tabName+`>. 
                        } ORDER BY ?sub`   
            }
            queryService.setArray(query, tabName, $scope)        
		}//fin tabruta
	}
])	