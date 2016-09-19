var divMapaRutaMaiz = document.getElementById('mapaRutaMaiz')
// console.log('Div Mapa:'+divMapaRutaMaiz)
navigator.geolocation.getCurrentPosition(fn_ok, fn_error) // mi posicion

function fn_error() {
	console.log("Error, no aceptaste compartir tu ubicacion")
}

function setMarkers(configStart, configEnd) {
	var gMarkerStart = new google.maps.Marker(configStart)
	var gMarkerEnd = new google.maps.Marker(configEnd)
	gMarkerStart.setIcon('dist/img/start.png')
	gMarkerEnd.setIcon('dist/img/end.png')	
}

function fn_ok (respuesta) {
	
	var latStart = 4.066815 // mi latitud
	var lonStart = -76.198268 // mi longitud
	var latEnd = 4.082682
	var lonEnd = -76.233658
	var gLatLonStart = new google.maps.LatLng(latStart, lonStart) //objeto de google maps de latitud y longitud
	var gLatLonEnd = new google.maps.LatLng(latEnd, lonEnd)
	var objConfig = {
		zoom: 15,
		center: gLatLonStart
	}
	var gMap = new google.maps.Map(divMapaRutaMaiz, objConfig)// creamos un nuevo mapa, recibe el div donde se va a renderizar y una configuracion
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
	setMarkers(configStart, configEnd)

	var objConfigDR = {
		map : gMap,
		suppressMarkers : true

	}
	var objConfigDS = {
		origin: gLatLonStart ,// punto de fin
		destination: gLatLonEnd, //punto de fin
		travelMode: google.maps.TravelMode.DRIVING //modo de viaje en carro
	}
	var directionService = new google.maps.DirectionsService() //obtiene coordenadas
	var directionRender = new google.maps.DirectionsRenderer(objConfigDR) // las muestra en forma de linea

	directionService.route(objConfigDS, fn_rutear)

	function fn_rutear( resultados, estatus) {
		// mostrar la linea entre origen y destino
		if(estatus == 'OK'){
			directionRender.setDirections(resultados) // pintamos la linea..
		}else{
			alert('Error'+estatus)
		}
	}
}

// https://www.google.com/maps/d/u/0/embed?mid=1ldCDkhCAOwBe95JxMgSolrUDjvw