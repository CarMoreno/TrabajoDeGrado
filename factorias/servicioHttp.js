var ecolodApp = angular.module('EcolodApp')
//ecolodApp.constant("endpoint", "http://localhost:3030/ecoLOD/query?query=")
//IP Privada ecolodApp.constant("endpoint", "http://192.168.14.2:3030/ecoLOD/query?query=")
//IP Publica 
//http://192.168.14.2
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
        };


        /**
         * [getCriterioConsulta description]
         * @return {[type]} [description]
         */
        serviceQuery.getCriterioConsulta = function()
        {
            return serviceQuery.criterioConsulta;
        };

        serviceQuery.setArray = function(arrayQuery, $scope) {
            $scope.categorias = {}
            for (var i in arrayQuery){
                if (arrayQuery[i].indexOf("Fauna") != -1) {
                    $scope.categorias.fauna = []
                    serviceQuery.getResults(arrayQuery[i], $scope.categorias.fauna);
                }
                else if (arrayQuery[i].indexOf("Flora") != -1 ) {
                    $scope.categorias.flora = []
                    serviceQuery.getResults(arrayQuery[i], $scope.categorias.flora);
                }

                else if (arrayQuery[i].indexOf("Alojamientos") != -1 ) {
                    $scope.categorias.alojamientos = []
                    serviceQuery.getResults(arrayQuery[i], $scope.categorias.alojamientos);
                }

                else if (arrayQuery[i].indexOf("Restaurantes") != -1 ) {
                    $scope.categorias.restaurantes = []
                    serviceQuery.getResults(arrayQuery[i], $scope.categorias.restaurantes);
                }

                else if (arrayQuery[i].indexOf("Lugares") != -1 ) {
                    $scope.categorias.lugares = []
                    serviceQuery.getResults(arrayQuery[i], $scope.categorias.lugares);
                }

                else if (arrayQuery[i].indexOf("Eventos") != -1 ) {
                    $scope.categorias.eventos = []
                    serviceQuery.getResults(arrayQuery[i], $scope.categorias.eventos);
                }

                else {
                    $scope.categorias.empresas = []
                    serviceQuery.getResults(arrayQuery[i], $scope.categorias.empresas);   
                }
            }    
        };
        /**
         * [getResults description]
         * @param  {[type]} $scope [description]
         * @param  {[type]} query  [description]
         * @return {[type]}        [description]
         */
        serviceQuery.getResults = function(query, array)
        {
            // console.log("QUERY: "+query)
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
            {
                results = data.results.bindings;
                querys = [];
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

                            array.push(resuls);
                            //console.log(array.length);
                        })
                }

            })

            .error(function(data, status, headers, config) 
            { 
                console.log(data)
            });
        };

        return serviceQuery;
    }
);