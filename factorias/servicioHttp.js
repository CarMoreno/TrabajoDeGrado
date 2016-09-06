var ecolodApp = angular.module('EcolodApp')
//ecolodApp.constant("endpoint", "http://localhost:3030/ecoLOD/query?query=")
ecolodApp.constant("endpoint", "http://190.14.254.238:3030/ecoLOD/query?query=")
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


        /**
         * [getResults description]
         * @param  {[type]} $scope [description]
         * @param  {[type]} query  [description]
         * @return {[type]}        [description]
         */
        serviceQuery.getResults = function($scope, query)
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
            {
                results = data.results.bindings;
                querys = [];
                $scope.datos = [];
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
                            $scope.datos.push(resuls);
                            //console.log($scope.datos);
                        })
                }

            })

            .error(function(data, status, headers, config) 
            { 
                console.log('error')
            });
        };

        return serviceQuery;
    }
);