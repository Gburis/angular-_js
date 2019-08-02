angular.module('alurapic', ['myDirectives', 'ngAnimate', 'ngRoute', 'myService'])
    .config(function($routeProvider, $locationProvider){

        $locationProvider.html5Mode(true);

        $routeProvider.when('/fotos', {
            templateUrl: 'partials/principal.html',
            controller: 'PhotosController'
        });

        // Register image
        $routeProvider.when('/fotos/new', {
            templateUrl: 'partials/photo.html',
            controller: 'PhotoController'
        });

        // edit image
        $routeProvider.when('/fotos/edit/:photoId', {
            templateUrl: 'partials/photo.html',
            controller: 'PhotoController'
        });

        $routeProvider.otherwise({redirectTo: '/fotos'});

    });
