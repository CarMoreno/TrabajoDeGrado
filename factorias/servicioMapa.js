var ecolodApp = angular.module('EcolodApp')
ecolodApp.factory('mapService', ['queryService',
	function(queryService) {
		var serviceMap = {}
		serviceMap.init = function(categoria, ruta, parametro, scope_marker, scope_window ) {
			serviceMap.getDataMarkers(categoria, parametro, scope_marker, scope_window)
			//serviceMap.getInfoWindow(categoria, parametro, scope_window)
		}

		serviceMap.getDataMarkers = function(categoria, parametro, scope_marker, scope_window) {

			if (parametro && (categoria != "Fauna" || categoria != "Flora")) {
				console.log(categoria)
				if (categoria == "Eventos") {
					query = `PREFIX FOAF: <http://xmlns.com/foaf/0.1/>
							PREFIX EVENT: <http://purl.org/NET/c4dm/event.owl#>
							PREFIX RDFS: <http://www.w3.org/2000/01/rdf-schema#>
							SELECT ?direccion ?nombre
								WHERE {
									?sub RDFS:label ?nombre .
									?sub FOAF:depiction <`+parametro+`> .
									?sub EVENT:place ?uriPlace .
									?uriPlace RDFS:label ?direccion .
								}`		
				}
				else {
					query = `PREFIX VCARD: <http://www.w3.org/2006/vcard/ns#>
		                    PREFIX FOAF: <http://xmlns.com/foaf/0.1/>
		                    PREFIX GR: <http://purl.org/goodrelations/v1#>
		                    SELECT ?direccion ?nombre 
		                        WHERE {
		                            {?sub GR:name ?nombre .}
		                            UNION
		                            {?sub FOAF:name ?nombre .}
		                             
		                            ?sub FOAF:depiction <`+parametro+`> .
		                            ?sub VCARD:adr ?uriAddress .
		                            ?uriAddress VCARD:street-address ?direccion .
		                        }`
					
				}        
				queryService.getDataMarkers(scope_marker, query, categoria)
				serviceMap.getOptionsMarker(scope_marker, categoria)
				queryService.getOne(query, scope_window)
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
				case "eventos":
					scope_marker.icon = 'dist/img/eventos.png'	
			}
		}

		serviceMap.getPath = function(ruta, scope_marker) {
			switch(ruta.toLowerCase()) {
				case "rutamaiz":
					scope_marker.origin = {lat:4.0632293, lng: -76.1954149}
          			scope_marker.destination = {lat:4.084143, lng: -76.2395161}
          			break

          		case "rutaoriente":
          			scope_marker.origin = {lat: 4.0727237, lng:-76.191922}//la 14
          			scope_marker.destination = {lat:4.0427483, lng:-76.0966857}//el picacho
          			break

          		case "jardin":
          			scope_marker.origin = {lat: 4.062789, lng: -76.1853115}//capilla del santo aparecido
          			scope_marker.destination = {lat: 4.0297339, lng: -76.1704603}//jardin
          			break

          		case "anillo":
          			console.log("Hola")
          			scope_marker.origin = {lat: 4.0957791, lng: -76.2091337}//confamdi chiminagos
          			scope_marker.destination = {lat: 4.1522723, lng: -76.2547296}//bocas de tulua
          			break				
			}
		}
		return serviceMap
	}
])