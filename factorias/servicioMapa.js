var ecolodApp = angular.module('EcolodApp')
ecolodApp.factory('mapService', 
	function(RUTA_MAIZ) {
		serviceMap = {}
		var divMapa = document.getElementById('mapa')
		var latStart
		var lonStart
		var latEnd
		var lonEnd

		serviceMap.go = function(ruta) {
			console.log(ruta)
			serviceMap.setStartEnd(ruta)
			navigator.geolocation.getCurrentPosition(serviceMap.fn_ok, serviceMap.fn_error)
		}

		/**
		 * [setStartEnd Establece las latitudes y longitudes del punto de partida y de llegada, dependiendo de la ruta]
		 * @param {[type]} ruta [description]
		 */
		serviceMap.setStartEnd = function(ruta) {
			if (ruta == RUTA_MAIZ) {
				latStart = 4.066815 // mi latitud
				lonStart = -76.198268 // mi longitud
				latEnd = 4.082682
				lonEnd = -76.233658
			}
		}
		/**
		 * [setConfigMarker Configura los markers en su posicion y los pinta en el mapa]
		 * @param {[type]} gMap         [el mapa]
		 * @param {[type]} gLatLonStart [punto de inicio]
		 * @param {[type]} gLatLonEnd   [punto de llegada]
		 */
		serviceMap.setConfigMarker = function(gMap, gLatLonStart, gLatLonEnd) {
			var configStart = {
				map: gMap,
				position: gLatLonStart,
				title: "Inicio Ruta del Maiz!!"
			}
			var configEnd = {
				map: gMap,
				position: gLatLonEnd,
				title: "Fin Ruta del Maiz"
			}
			serviceMap.setMarkers(configStart, configEnd)
		}
		/**
		 * [setMarkers pinta los markers en el mapa]
		 * @param {[type]} configStart [description]
		 * @param {[type]} configEnd   [description]
		 */
		serviceMap.setMarkers = function(configStart, configEnd) {
			var gMarkerStart = new google.maps.Marker(configStart)
			var gMarkerEnd = new google.maps.Marker(configEnd)
			gMarkerStart.setIcon('dist/img/start.png')
			gMarkerEnd.setIcon('dist/img/end.png')	
		}

		/**
		 * [setConfigPath configura y pinta la linea que uno los puntos de inicio y llegada]
		 * @param {[type]} gMap         [mapa]
		 * @param {[type]} gLatLonStart [punto de inicio]
		 * @param {[type]} gLatLonEnd   [punto de llegada]
		 */
		serviceMap.setConfigPath = function(gMap, gLatLonStart, gLatLonEnd) {
			var objConfigDR = { map : gMap, suppressMarkers : true }
			var objConfigDS = {
				origin: gLatLonStart ,// punto de fin
				destination: gLatLonEnd, //punto de fin
				travelMode: google.maps.TravelMode.DRIVING //modo de viaje en carro
			}
			var directionService = new google.maps.DirectionsService() //obtiene coordenadas
			var directionRender = new google.maps.DirectionsRenderer(objConfigDR) // las muestra en forma de linea
			directionService.route(objConfigDS, fn_pintar)

			// funcion interna que pinta la linea entre los dos puntos
			function fn_pintar( resultados, estatus) {
				if(estatus == 'OK'){
					directionRender.setDirections(resultados) // pintamos la linea..
				}else{
					alert('Error ..... '+estatus)
				}
			}//fin fn_pintar
		}// fin setConfigPath

		serviceMap.getDirections = function(ruta) {
			query = ""			
		}
		/**
		 * [fn_ok Si decides compartir la ubicacion, el callback llega hasta aqui]
		 * @param  {[type]} respuesta [description]
		 * @return {[type]}           [description]
		 */
		serviceMap.fn_ok = function(respuesta) {
			var gLatLonStart = new google.maps.LatLng(latStart, lonStart) //objeto de google maps de latitud y longitud
			var gLatLonEnd = new google.maps.LatLng(latEnd, lonEnd)
			var objConfig = { zoom: 15, center: gLatLonStart }
			var gMap = new google.maps.Map(divMapa, objConfig)// creamos un nuevo mapa, recibe el div donde se va a renderizar y una configuracion
			serviceMap.setConfigMarker(gMap, gLatLonStart, gLatLonEnd) //configuramos los markers
			serviceMap.setConfigPath(gMap, gLatLonStart, gLatLonEnd) //configuramos el path entre los puntos de inicio y llegada
			//serviceMap.setConfigPlaces() // configura la pintada de los lugares (eventos, alojamientos, restaurantes)
		}//fin fn_ok

		/**
		 * [fn_error Si no aceptas compartir tu ubicacion, el callback llega hasta acá y el mapa no se renderiza :(]
		 */
		serviceMap.fn_error = function() {
			console.log('No has aceptado compartir tu ubicación')
		}	

		return serviceMap

	}
)