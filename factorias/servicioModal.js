var ecolodApp = angular.module("EcolodApp")
ecolodApp.factory('modalService', ['queryService',
	function(queryService) {
		var modalService = {}
		
		/**
		 * [selectOne realiza una consulta spqrql seleccionando un item de una categoría especifica, luego establece los
		 * valores de los atributos de este item para usarlo en la vista modal.html]
		 * @param  {[string]} categoria [flora, fauna, alojamientos, restaurantes...]
		 * @param  {[string]} ruta      [del maiz, vuelta oriente, anillo agricola, jardin botanico, riofrio]
		 * @param  {[string]} parametro [uri de imgur]
		 * @param  {[type]} $scope    [obj]
		 * 
		 */
		modalService.selectOne = function(categoria, ruta, parametro, $scope) {
			// console.log(parametro)
			$scope.dato = []
			query = `PREFIX UMBEL: <http://umbel.org/umbel#> 
					PREFIX FOAF: <http://xmlns.com/foaf/0.1/> 
					SELECT ?sub 
						WHERE {
							?sub  UMBEL:isRelatedTo <http://190.14.254.237/dataseteco/`+ruta+"/"+categoria+`>. 
							?sub FOAF:depiction <`+parametro+`> .
						}`											
			queryService.getResults(query, $scope.dato)
			modalService.setValues(categoria, $scope)
			modalService.selectDataCustom(categoria, ruta, parametro, $scope)
			//console.log($scope.dato)
		}
		// *
		//  * [selectDataCustom Selecciona datos de interes de algunas categorías, por ejemplo: número de camas o habitaciones de un hotel, el tiempo
		//  * de duración de algún evento o el string de una dirección (no la uri de gmaps), este metodo es necesario hacerlo puesto
		//  * que con el metodo selectOne obtengo los objetos que salen de la uri principal del item de la categoria en especifico. 
		//  * Por ejemplo, los numeros de camas o de habitaciones de un hotel salen de una uri distinta a la uri principal de ese hotel.]
		//  * @param  {[type]} categoria [alojamientos, eventos, restaurantes...]
		//  * @param  {[type]} ruta      [Maiz, Jardin Botánico...]
		//  * @param  {[type]} parametro [Uri de imgur]
		//  * @param  {[type]} $scope    [obj]
		 
		modalService.selectDataCustom = function(categoria, ruta, parametro, $scope) {
			$scope.otrosDatos = []
			switch(categoria.toLowerCase()){
				case "alojamientos":	
					query = `PREFIX UMBEL: <http://umbel.org/umbel#> 
							PREFIX FOAF: <http://xmlns.com/foaf/0.1/>
							PREFIX VCARD: <http://www.w3.org/2006/vcard/ns#> 
							PREFIX ACCO: <http://purl.org/acco/ns#>
							PREFIX GR: <http://purl.org/goodrelations/v1#>
							SELECT ?direccion ?numHabitaciones ?numCamas
								WHERE {
									?subj  UMBEL:isRelatedTo <http://190.14.254.237/dataseteco/`+ruta+"/"+categoria+`>. 
									?subj FOAF:depiction <`+parametro+`> .
									?subj VCARD:adr ?obj1 .
									?obj2 ACCO:partOf ?subj .

									?obj1 VCARD:street-address ?direccion .
									?obj2 ACCO:numberOfRooms ?uriValue .
									?uriValue GR:hasValue ?numHabitaciones .
									
									?obj2 ACCO:bed ?uriBed .
									?uriBed ACCO:quantity ?numCamas .
								}`
					break
				case "empresas":
				case "restaurantes":	
					query = `PREFIX UMBEL: <http://umbel.org/umbel#> 
							PREFIX FOAF: <http://xmlns.com/foaf/0.1/>
							PREFIX VCARD: <http://www.w3.org/2006/vcard/ns#> 
							PREFIX GR: <http://purl.org/goodrelations/v1#>
							SELECT ?direccion ?abre ?cierra
							WHERE {
								?subj  UMBEL:isRelatedTo <http://190.14.254.237/dataseteco/`+ruta+"/"+categoria+`>. 
								?subj FOAF:depiction <`+parametro+`> .
								?subj VCARD:adr ?obj1 .
								?obj1 VCARD:street-address ?direccion .

								?subj GR:hasOpeningHoursSpecification ?obj2 .
								?obj2 GR:opens ?abre .
								?obj2 GR:closes ?cierra .
							}`
					break		

			}
			//console.log(query)	
			queryService.getOne(query, $scope.otrosDatos)
			//console.log(array)
		}

		/**
		 * [setValues Establece 3 atributos principales que tendrá cualquier modal: El titulo, un pequeño texto en italica debajo del titulo
		 * la y una descripcion. Dependiendo de la categoria, estos atributos cambian su valor.]
		 * @param {[string]} categoria [flora, fauna, alojamientos...]
		 * @param {[type]} $scope    []
		 */
		modalService.setValues = function(categoria, $scope) {
			$scope.attr = {} // un objeto para ir guardando los values
			categoria = categoria.toLowerCase()
			if (categoria == "fauna" || categoria == "flora") {
				$scope.attr.modalTitle = "commonName"
				$scope.attr.modalSpam = "scientificName"
				$scope.attr.modalDescription = "shortDescription"
			} 
			else if (categoria == "alojamientos" || categoria == "empresas" || categoria == "restaurantes" || categoria == "lugares" ) {
				$scope.attr.modalTitle = "name"
				$scope.attr.modalSpam = "tel"

				if (categoria == "alojamientos" || categoria == "empresas" || categoria == "restaurantes") {
					$scope.attr.modalDescription = "description"
				}
				else { // lugares
					$scope.attr.modalDescription = "comment"
				}

			}
			else {//EVENTOS
				$scope.attr.modalTitle = "label"
				$scope.attr.modalDescription = "comment"
				$scope.attr.modalSpam = "label"

			}
		}

		return modalService
	}

]);