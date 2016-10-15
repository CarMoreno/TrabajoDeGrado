var ecolodApp = angular.module('EcolodApp', ['ngRoute', 'angularUtils.directives.dirPagination', 'ui.bootstrap', 'ngMap', 'hljs'])
ecolodApp.config(function(hljsServiceProvider, $sceProvider) {
    hljsServiceProvider.setOptions({
    })
    $sceProvider.enabled(false);
})
// IP Privada http://192.168.14.2:3030/ecoLOD/query?query=
// IP Publica http://190.14.254.238:3030/ecoLOD/query?query=
ecolodApp.constant("endpoint", "http://190.14.254.238:3030/ecoLOD/query?query=")
// Configuración de las rutas
ecolodApp.config(function($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl : 'pages/inicio.html',
            controller  : 'inicioCtrl', 
            paginaActiva: '/'
        })
        .when('/resultado', {
            templateUrl : 'pages/resultado.html',
            controller  : 'resultadoCtrl', 
            paginaActiva: '/resultado'
        })
        .when('/rutaMaiz', {
            templateUrl : 'pages/rutaMaiz/rutaMaiz.html',
            controller  : 'rutaMaizCtrl',
            paginaActiva: '/rutaMaiz'
        })
        .when('/rutaOriente', {
            templateUrl : 'pages/rutaOriente/rutaOriente.html',
            controller  : 'rutaOrienteCtrl',
            paginaActiva: '/rutaOriente'
        })
        .when('/rutaJardin', {
            templateUrl : 'pages/rutaJardin/rutaJardin.html',
            controller  : 'rutaJardinCtrl',
            paginaActiva: '/rutaJardin'
        })
        .when('/rutaAgricola', {
            templateUrl : 'pages/rutaAgricola/rutaAgricola.html',
            controller  : 'rutaAgricolaCtrl',
            paginaActiva: '/rutaAgricola'
        })
        .when('/riofrio', {
            templateUrl : 'pages/riofrio/riofrio.html',
            controller  : 'riofrioCtrl',
            paginaActiva: '/riofrio'
        })
        .when('/endpoint', {
            templateUrl : 'pages/endpoint.html',
            controller  : 'endpointCtrl',
            paginaActiva: '/endpoint'
        })
        .when('/resultado', {
            templateUrl : 'pages/resultado.html',
            controller  : 'resultadoCtrl', 
            paginaActiva: '/resultado'
        })
        .when('/terminos', {
            templateUrl : 'pages/terminos.html',
            controller  : 'endpointCtrl', 
            paginaActiva: '/terminos'
        })
        .otherwise({
            redirectTo:'/'
        });
});