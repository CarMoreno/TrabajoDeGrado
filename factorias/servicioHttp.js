var ecolodApp = angular.module('EcolodApp')
ecolodApp.factory('queryService',
    function($http, endpoint)
    {
        var serviceQuery = {};

        serviceQuery.criterioConsulta = null;
        
        /**
         * [setCriterioConsulta description]
         * @param {[type]} busqueda [description]
         */
        serviceQuery.setCriterioConsulta = function(busqueda)
        {
            serviceQuery.criterioConsulta = busqueda;
        }


        /**
         * [getCriterioConsulta description]
         * @return {[type]} [description]
         */
        serviceQuery.getCriterioConsulta = function()
        {
            return serviceQuery.criterioConsulta;
        }

        serviceQuery.setArray = function(query, tabName, $scope) {
            $scope.categorias = {}
            if (tabName == "Fauna") {
                $scope.categorias.fauna = []
                serviceQuery.getResults(query, $scope.categorias.fauna);
            }
            else if (tabName == "Flora") {
                $scope.categorias.flora = []
                serviceQuery.getResults(query, $scope.categorias.flora);
            }

            else if (tabName == "Alojamientos") {
                $scope.categorias.alojamientos = []
                serviceQuery.getResults(query, $scope.categorias.alojamientos);
                //$scope.search = $scope.categorias.alojamientos.length
            }

            else if (tabName == "Restaurantes") {
                $scope.categorias.restaurantes = []
                serviceQuery.getResults(query, $scope.categorias.restaurantes);
            }

            else if (tabName == "Lugares") {
                $scope.categorias.lugares = []
                serviceQuery.getResults(query, $scope.categorias.lugares);
            }

            else if (tabName == "Eventos") {
                $scope.categorias.eventos = []
                serviceQuery.getResults(query, $scope.categorias.eventos);
            }

            else{//empresas
                $scope.categorias.empresas = []
                serviceQuery.getResults(query, $scope.categorias.empresas);   
            }
            
        }    

        serviceQuery.getOne = function(query, object) {
            if (object) {
                $http({
                    url: endpoint + escape(query),
                    headers: {'Content-type' : 'application/x-www-form-urlencoded',
                        'Accept' : 'application/sparql-results+json'},
                    method: "GET",
                    params: {format: "json"}    
                })
                .success(function(data, status, headers, config) {
                    results = data.results.bindings
                    object.data = results
                    console.log(object.data)
                })
                .error(function(data, status, headers, config) {
                    console.log("Error ... "+status)
                })
            }

        }

        serviceQuery.endpoint = function(query, object) {
            if (object) {
                $http({
                    url: endpoint + escape(query),
                    headers: {'Content-type' : 'application/x-www-form-urlencoded',
                        'Accept' : 'application/sparql-results+json'},
                    method: "GET",
                    params: {format: "json"}    
                })
                .success(function(data, status, headers, config) {
                    object.data = data.results.bindings
                })
                .error(function(data, status, headers, config) {
                    console.log("Error ... "+status)
                })
            }

        }

        serviceQuery.getDataMarkers = function(scope_marker, query, categoria) {
            $http({
                url: endpoint + escape(query),
                headers: {'Content-type' : 'application/x-www-form-urlencoded',
                    'Accept' : 'application/sparql-results+json'},
                method: "GET",
                params: {format: "json"}    
            })
            .success(function(data, status, headers, config) {
                if(categoria != "Fauna" || categoria != "Flora"){
                    var results = data.results.bindings // el string de la direccion
                    //console.log(results)
                    var geocoder = new google.maps.Geocoder()
                    geocoder.geocode({address: results[0].direccion.value}, function(data, status) {
                        if(status == google.maps.GeocoderStatus.OK){
                            scope_marker.lat = data[0].geometry.location.lat()
                            scope_marker.lng = data[0].geometry.location.lng()
                        }
                    })
                }

                                
            })
            .error(function(data, status, headers, config) {
                console.log("Error ... "+status)
            })        
        }

        serviceQuery.getBusquedaKeyWord = function($scope, query) {
            $scope.datos = []
            serviceQuery.getResults(query, $scope.datos) 
        }
        /**
         * [getResults description]
         * @param  {[type]} $scope [description]
         * @param  {[type]} query  [description]
         * @return {[type]}        [description]
         */
        serviceQuery.getResults = function(query, array)
        {
            $http({
            url: endpoint + escape(query), 
            headers: { 'Content-type' : 'application/x-www-form-urlencoded',
                    'Accept' : 'application/sparql-results+json'},
            method: "GET",
            params: {
                    format: "json"
                }
            })

            .success(function(data, status, headers, config) 
            {   console.log(data)
                results = data.results.bindings;
                querys = [];
                //console.log(results)
                //$scope.datos = [];
                for(i=0; i<results.length; i++)
                {
                    querys[i] = "SELECT ?sub ?pred ?obj WHERE {<"+ results[i].sub.value +"> ?pred  ?obj.}"
                }

                for(i=0; i<querys.length; i++)
                {
                    $http({
                        url: endpoint + escape(querys[i]), 
                        headers: { 'Content-type' : 'application/x-www-form-urlencoded',
                                'Accept' : 'application/sparql-results+json'},
                        method: "GET",
                        params: {
                                format: "json"
                            }
                        })

                        .success(function(data, status, headers, config) 
                        {
                            resuls = data.results.bindings;
                            array.push(resuls)
                            //console.log(array.length);
                        })
                }

            })

            .error(function(data, status, headers, config) 
            { 
                console.log(status)
            });
        };

        return serviceQuery;
    }
);