var app = angular.module('EcolodApp')
app.controller('tabsCtrl', ['$scope', 'queryService',
	function($scope, queryService) {

		$scope.tabElegida = function(tabName, ruta) {
            if(ruta.indexOf("rutaMaiz") != -1) {
    			query = `PREFIX UMBEL: <http://umbel.org/umbel#> 
                        SELECT DISTINCT ?sub 
                        WHERE {
                          ?sub  UMBEL:isRelatedTo <http://190.14.254.237/dataseteco/RutaDelMaiz/`+tabName+`>. 
                        }`
            }
            else if(ruta.indexOf("rutaOriente") != -1) {
                query = `PREFIX UMBEL: <http://umbel.org/umbel#> 
                        SELECT DISTINCT ?sub 
                        WHERE {
                          ?sub  UMBEL:isRelatedTo <http://190.14.254.237/dataseteco/RutaVueltaAOriente/`+tabName+`>. 
                        }`   
            }
            else if(ruta.indexOf("rutaJardin") != -1) {
                query = `PREFIX UMBEL: <http://umbel.org/umbel#> 
                        SELECT DISTINCT ?sub 
                        WHERE {
                          ?sub  UMBEL:isRelatedTo <http://190.14.254.237/dataseteco/RutaDelJardinBotanico/`+tabName+`>. 
                        }`   
            }
            else if(ruta.indexOf("rutaAgricola") != -1) {
                query = `PREFIX UMBEL: <http://umbel.org/umbel#> 
                        SELECT DISTINCT ?sub 
                        WHERE {
                          ?sub  UMBEL:isRelatedTo <http://190.14.254.237/dataseteco/RutaDelAnilloAgricola/`+tabName+`>. 
                        }`   
            }
            else {
                query = `PREFIX UMBEL: <http://umbel.org/umbel#> 
                        SELECT DISTINCT ?sub 
                        WHERE {
                          ?sub  UMBEL:isRelatedTo <http://190.14.254.237/dataseteco/Riofrio/`+tabName+`>. 
                        }`   
            }
            queryService.setArray(query, tabName, $scope)        
		}
	}
])	