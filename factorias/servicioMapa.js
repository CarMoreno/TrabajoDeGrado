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
				serviceMap.getEvents(scope_marker, scope_window)
			}
		}

		serviceMap.getOptionsMarker = function(scope_marker, categoria) {
			switch(categoria.toLowerCase()) {
				case "alojamientos":
					scope_marker.options = {icon: 'dist/img/hotel.png'}
					break
				case "empresas":
					scope_marker.options = {icon: 'dist/img/empresa.png'}
					break
				case "restaurantes":
					scope_marker.options = {icon: 'dist/img/restaurante.png'}
			}
		}

		serviceMap.getEvents = function(scope_marker, scope_window) {

			scope_window.show = false
			scope_marker.events = {
				click: function (marker, eventName, model) {
					console.log('Click marker')
					scope_window.model = model
					scope_window.show = true

				}
			}

		}//fin getEvents
		return serviceMap
	}
])