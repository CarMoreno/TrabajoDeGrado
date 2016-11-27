var app = angular.module('EcolodApp')
app.controller('tabsCtrl', ['$scope', 'queryService',
	function($scope, queryService) { 
        $scope.categoria = "General"

        $scope.disable = function(array) {
            console.log(array)
            if(!array.length) {
                return true
            }
            else {
                return false
            }
        }
        
        $scope.tabElegida = function(tabName, ruta) {
            if(ruta.indexOf("rutaMaiz") != -1) {
    			query = `PREFIX UMBEL: <http://umbel.org/umbel#> 
                        SELECT DISTINCT ?sub 
                        WHERE {
                          ?sub  UMBEL:isAbout <http://190.14.254.237/dataseteco/RutaDelMaiz/`+tabName+`.rdf>. 
                        } ORDER BY ?sub`
                $scope.categoria = tabName                      
            }
            else if(ruta.indexOf("rutaOriente") != -1) {
                query = `PREFIX UMBEL: <http://umbel.org/umbel#> 
                        SELECT DISTINCT ?sub 
                        WHERE {
                          ?sub  UMBEL:isAbout <http://190.14.254.237/dataseteco/RutaVueltaAOriente/`+tabName+`.rdf>. 
                        } ORDER BY ?sub` 
                $scope.categoria = tabName            
            }
            else if(ruta.indexOf("rutaJardin") != -1) {
                query = `PREFIX UMBEL: <http://umbel.org/umbel#> 
                        SELECT DISTINCT ?sub 
                        WHERE {
                          ?sub  UMBEL:isAbout <http://190.14.254.237/dataseteco/RutaDelJardinBotanico/`+tabName+`.rdf>. 
                        } ORDER BY ?sub`   
                $scope.categoria = tabName      
            }
            else if(ruta.indexOf("rutaAgricola") != -1) {
                query = `PREFIX UMBEL: <http://umbel.org/umbel#> 
                        SELECT DISTINCT ?sub 
                        WHERE {
                          ?sub  UMBEL:isAbout <http://190.14.254.237/dataseteco/RutaDelAnilloAgricola/`+tabName+`.rdf>. 
                        } ORDER BY ?sub`   
            }
            else {
                query = `PREFIX UMBEL: <http://umbel.org/umbel#> 
                        SELECT DISTINCT ?sub 
                        WHERE {
                          ?sub  UMBEL:isAbout <http://190.14.254.237/dataseteco/Riofrio/`+tabName+`.rdf>. 
                        } ORDER BY ?sub`
                $scope.categoria = tabName           
            }
            queryService.setArray(query, tabName, $scope)        
		}//fin tabruta
	}
])	