angular.module('myService', ['ngResource'])
    .factory('Ajax', function($resource){
        return $resource('/v1/fotos/:photoId', null, {
            'update' : {
                method: 'PUT'
            }
        });
    });