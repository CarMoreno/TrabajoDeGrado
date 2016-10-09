var ecolodApp = angular.module('EcolodApp')
ecolodApp.controller('resultadoCtrl', ['$scope', '$route', 'queryService',
    function($scope, $route, queryService) 
    {
        $scope.ruta = $route;
        var valor = queryService.getCriterioConsulta();

        function consulta(busqueda)
        {
            var query = `
            PREFIX GR: <http://purl.org/goodrelations/v1#>
            PREFIX FOAF: <http://xmlns.com/foaf/0.1/>
            PREFIX WILDLIFE: <http://purl.org/ontology/wo/>
            PREFIX RDFS: <http://www.w3.org/2000/01/rdf-schema#>
            SELECT ?sub 
                WHERE {
                    {?sub GR:name '`+busqueda+`'@es .}
                    UNION
                    {?sub RDFS:label '`+busqueda+`'@es .}
                    UNION
                    {?sub WILDLIFE:commonName '`+busqueda+`'@es .}
                    UNION 
                    {?sub FOAF:name '`+busqueda+`'@es .}
                }`
            queryService.getBusquedaKeyWord($scope, query); 
            console.log(query)           
        }

        consulta(valor);
    }
])