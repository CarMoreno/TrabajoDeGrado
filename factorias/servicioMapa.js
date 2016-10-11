var ecolodApp = angular.module('EcolodApp')
ecolodApp.factory('mapService', ['queryService',
	function(queryService) {
		var serviceMap = {}
		serviceMap.init = function(categoria, ruta, parametro, scope_marker, scope_window ) {
			serviceMap.getDataMarkers(categoria, parametro, scope_marker, scope_window)
		}

		serviceMap.getDataMarkers = function(categoria, parametro, scope_marker, scope_window) {
			if (parametro && categoria) {
				//console.log("Solo entre cuando fue necesario: "+parametro)
				query = `PREFIX UMBEL: <http://umbel.org/umbel#>
	                    PREFIX VCARD: <http://www.w3.org/2006/vcard/ns#>
	                    PREFIX FOAF: <http://xmlns.com/foaf/0.1/>
	                    SELECT ?direccion 
	                        WHERE {
	                            ?sub FOAF:depiction <`+parametro+`> . 
	                            ?sub VCARD:adr ?obj1 .
	                            ?obj1 VCARD:street-address ?direccion .
	                        }`
				queryService.getDataMarkers(scope_marker, query)
				serviceMap.getOptionsMarker(scope_marker, categoria)
			}
		}

		serviceMap.getOptionsMarker = function(scope_marker, categoria) {
			switch(categoria.toLowerCase()) {
				case "alojamientos":
					scope_marker.icon = 'dist/img/hotel.png'
					break
				case "empresas":
					scope_marker.icon = 'dist/img/empresa.png'
					break
				case "restaurantes":
					scope_marker.icon = 'dist/img/restaurante.png'
					break
				case "lugares":
					scope_marker.icon = 'dist/img/lugares.png'
			}
		}

		serviceMap.getPath = function(ruta, scope_marker) {
			switch(ruta.toLowerCase()) {
				case "rutamaiz":
					scope_marker.origin = {lat:4.0632293, lng: -76.1954149}
          			scope_marker.destination = {lat:4.084143, lng: -76.2395161}
          			break
			}
		}
		return serviceMap
	}
])