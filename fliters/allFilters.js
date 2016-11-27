var ecolodApp = angular.module("EcolodApp")

//Filtro para mostrar la duracion de eventos de forma correcta
ecolodApp.filter("duration", function() {

	return function(cadena) {
		if (isNaN(cadena)) {//si la entrada no es numerica
			return cadena.slice(1, (cadena.length - 1))
		}
		else {
			return cadena
		}	
	}
})

ecolodApp.filter('moment', function () {
  return function (input, momentFn /*, param1, param2, ...param n */) {
  	// moment.locale('es')
    var args = Array.prototype.slice.call(arguments, 2),
        momentObj = moment(input);
    return momentObj[momentFn].apply(momentObj, args);
  };
});

