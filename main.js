var ecolodApp = angular.module('EcolodApp', ['ngRoute', 'angularUtils.directives.dirPagination', 'ui.bootstrap'])
ecolodApp.constant("endpoint", "http://190.14.254.238:3030/ecoLOD/query?query=")
ecolodApp.constant("RUTA_MAIZ", "RutaDelMaiz")
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
            templateUrl : 'pages/RutaMaiz/rutaMaiz.html',
            controller  : 'rutaMaizCtrl',
            paginaActiva: '/rutaMaiz'
        })
        .when('/rutaMaiz/flora', {
            templateUrl : 'pages/RutaMaiz/flora.html',
            controller  : 'floraMaizCtrl',
            paginaActiva: '/rutaMaiz/flora'
        })
        .when('/rutaMaiz/eventos', {
            templateUrl : 'pages/RutaMaiz/eventos.html',
            controller  : 'eventosCtrl',
            paginaActiva: '/rutaMaiz/eventos'
        })
        .when('/rutaMaiz/alojamientos', {
            templateUrl : 'pages/RutaMaiz/alojamientos.html',
            paginaActiva: '/rutaMaiz/alojamientos',
            controller  : 'alojamientosCtrl'
        })
        .when('/rutaMaiz/fauna', {
            templateUrl : 'pages/RutaMaiz/fauna.html',
            paginaActiva: '/rutaMaiz/fauna',
            controller  : 'faunaCtrl'
        })
        .when('/rutaMaiz/restaurantes', {
            templateUrl : 'pages/RutaMaiz/restaurantes.html',
            paginaActiva: '/rutaMaiz/restaurantes',
            controller  : 'restaurantesCtrl'
        })
        .when('/rutaMaiz/lugares', {
            templateUrl : 'pages/RutaMaiz/lugares.html',
            paginaActiva: '/rutaMaiz/lugares',
            controller  : 'lugaresCtrl'
        })
        .when('/rutaMaiz/empresas', {
            templateUrl : 'pages/RutaMaiz/empresas.html',
            paginaActiva: '/rutaMaiz/empresas',
            controller  : 'empresasCtrl'
        })


        // .when('/rutaOriente', {
        //     templateUrl : 'pages/RutaVueltaOriente/rutaOriente.html',
        //     controller  : 'rutaOrienteCtrl',
        //     paginaActiva: '/rutaOriente'
        // })
        // .when('/rutaOriente/flora', {
        //     templateUrl : 'pages/RutaVueltaOriente/flora.html',
        //     controller  : 'floraOrienteCtrl',
        //     paginaActiva: '/rutaOriente/flora'
        // })
        // .when('/rutaOriente/eventos', {
        //     templateUrl : 'pages/RutaVueltaOriente/eventos.html',
        //     controller  : 'eventosOrienteCtrl',
        //     paginaActiva: '/rutaOriente/eventos'
        // })
        // .when('/rutaOriente/alojamientos', {
        //     templateUrl : 'pages/RutaVueltaOriente/alojamientos.html',
        //     paginaActiva: '/rutaOriente/alojamientos',
        //     controller  : 'alojamientosOrienteCtrl'
        // })
        // .when('/rutaOriente/fauna', {
        //     templateUrl : 'pages/RutaVueltaOriente/fauna.html',
        //     paginaActiva: '/rutaOriente/fauna',
        //     controller  : 'faunaOrienteCtrl'
        // })
        // .when('/rutaOriente/restaurantes', {
        //     templateUrl : 'pages/RutaVueltaOriente/restaurantes.html',
        //     paginaActiva: '/rutaOriente/restaurantes',
        //     controller  : 'restaurantesOrienteCtrl'
        // })
        // .when('/rutaOriente/lugares', {
        //     templateUrl : 'pages/RutaVueltaOriente/lugares.html',
        //     paginaActiva: '/rutaOriente/lugares',
        //     controller  : 'lugaresOrienteCtrl'
        // })
        // .when('/rutaOriente/empresas', {
        //     templateUrl : 'pages/RutaVueltaOriente/empresas.html',
        //     paginaActiva: '/rutaOriente/empresas',
        //     controller  : 'empresasOrienteCtrl'
        // })

        // .when('/rutaJardin', {
        //     templateUrl : 'pages/RutaJardinBotanico/rutaJardin.html',
        //     controller  : 'rutaJardinCtrl',
        //     paginaActiva: '/rutaJardin'
        // })
        // .when('/rutaJardin/flora', {
        //     templateUrl : 'pages/RutaJardinBotanico/flora.html',
        //     controller  : 'floraJardinCtrl',
        //     paginaActiva: '/rutaJardin/flora'
        // })
        // .when('/rutaJardin/eventos', {
        //     templateUrl : 'pages/RutaJardinBotanico/eventos.html',
        //     controller  : 'eventosJardinCtrl',
        //     paginaActiva: '/rutaJardin/eventos'
        // })
        // .when('/rutaJardin/alojamientos', {
        //     templateUrl : 'pages/RutaJardinBotanico/alojamientos.html',
        //     paginaActiva: '/rutaJardin/alojamientos',
        //     controller  : 'alojamientosJardinCtrl'
        // })
        // .when('/rutaJardin/fauna', {
        //     templateUrl : 'pages/RutaJardinBotanico/fauna.html',
        //     paginaActiva: '/rutaJardin/fauna',
        //     controller  : 'faunaJardinCtrl'
        // })
        // .when('/rutaJardin/restaurantes', {
        //     templateUrl : 'pages/RutaJardinBotanico/restaurantes.html',
        //     paginaActiva: '/rutaJardin/restaurantes',
        //     controller  : 'restaurantesJardinCtrl'
        // })
        // .when('/rutaJardin/lugares', {
        //     templateUrl : 'pages/RutaJardinBotanico/lugares.html',
        //     paginaActiva: '/rutaJardin/lugares',
        //     controller  : 'lugaresJardinCtrl'
        // })
        // .when('/rutaJardin/empresas', {
        //     templateUrl : 'pages/RutaJardinBotanico/empresas.html',
        //     paginaActiva: '/rutaJardin/empresas',
        //     controller  : 'empresasJardinCtrl'
        // })

        // .when('/rutaAgricola', {
        //     templateUrl : 'pages/RutaAnilloAgricola/rutaAgricola.html',
        //     controller  : 'rutaAgricolaCtrl',
        //     paginaActiva: '/rutaAgricola'
        // })
        // .when('/rutaAgricola/flora', {
        //     templateUrl : 'pages/RutaAnilloAgricola/flora.html',
        //     controller  : 'floraAgricolaCtrl',
        //     paginaActiva: '/rutaAgricola/flora'
        // })
        // .when('/rutaAgricola/eventos', {
        //     templateUrl : 'pages/RutaAnilloAgricola/eventos.html',
        //     controller  : 'eventosAgricolaCtrl',
        //     paginaActiva: '/rutaAgricola/eventos'
        // })
        // .when('/rutaAgricola/alojamientos', {
        //     templateUrl : 'pages/RutaAnilloAgricola/alojamientos.html',
        //     paginaActiva: '/rutaAgricola/alojamientos',
        //     controller  : 'alojamientosAgricolaCtrl'
        // })
        // .when('/rutaAgricola/fauna', {
        //     templateUrl : 'pages/RutaAnilloAgricola/fauna.html',
        //     paginaActiva: '/rutaAgricola/fauna',
        //     controller  : 'faunaAgricolaCtrl'
        // })
        // .when('/rutaAgricola/restaurantes', {
        //     templateUrl : 'pages/RutaAnilloAgricola/restaurantes.html',
        //     paginaActiva: '/rutaAgricola/restaurantes',
        //     controller  : 'restaurantesAgricolaCtrl'
        // })
        // .when('/rutaAgricola/lugares', {
        //     templateUrl : 'pages/RutaAnilloAgricola/lugares.html',
        //     paginaActiva: '/rutaAgricola/lugares',
        //     controller  : 'lugaresAgricolaCtrl'
        // })
        // .when('/rutaAgricola/empresas', {
        //     templateUrl : 'pages/RutaAnilloAgricola/empresas.html',
        //     paginaActiva: '/rutaAgricola/empresas',
        //     controller  : 'empresasAgricolaCtrl'
        // })

        // .when('/riofrio', {
        //     templateUrl : 'pages/Riofrio/riofrio.html',
        //     controller  : 'riofrioCtrl',
        //     paginaActiva: '/riofrio'
        // })
        // .when('/riofrio/flora', {
        //     templateUrl : 'pages/Riofrio/flora.html',
        //     controller  : 'floraRioCtrl',
        //     paginaActiva: '/riofrio/flora'
        // })
        // .when('/riofrio/eventos', {
        //     templateUrl : 'pages/Riofrio/eventos.html',
        //     controller  : 'eventosRioCtrl',
        //     paginaActiva: '/riofrio/eventos'
        // })
        // .when('/riofrio/alojamientos', {
        //     templateUrl : 'pages/Riofrio/alojamientos.html',
        //     paginaActiva: '/riofrio/alojamientos',
        //     controller  : 'alojamientosRioCtrl'
        // })
        // .when('/riofrio/fauna', {
        //     templateUrl : 'pages/Riofrio/fauna.html',
        //     paginaActiva: '/riofrio/fauna',
        //     controller  : 'faunaRioCtrl'
        // })
        // .when('/riofrio/restaurantes', {
        //     templateUrl : 'pages/Riofrio/restaurantes.html',
        //     paginaActiva: '/riofrio/restaurantes',
        //     controller  : 'restaurantesRioCtrl'
        // })
        // .when('/riofrio/lugares', {
        //     templateUrl : 'pages/Riofrio/lugares.html',
        //     paginaActiva: '/riofrio/lugares',
        //     controller  : 'lugaresRioCtrl'
        // })
        // .when('/riofrio/empresas', {
        //     templateUrl : 'pages/Riofrio/empresas.html',
        //     paginaActiva: '/riofrio/empresas',
        //     controller  : 'empresasRioCtrl'
        // })

        // .otherwise({
        //     redirectTo:'/'
        // });
});