angular.module('myService', ['ngResource'])
    .factory('Ajax', function($resource){
        return $resource('/v1/fotos/:photoId', null, {
            'update' : {
                method: 'PUT'
            }
        });
    }).factory('registerImage', function(Ajax, $q, $rootScope){
        var event = 'registerImage';
        var service = {};
        service.register = function (photo){
            return $q(function(resolve, reject){
                if(photo._id){
                    Ajax.update({photoId: photo._id}, photo, function(){

                        $rootScope.$broadcast(event);

                        resolve({
                            mensagem: 'Foto ' + photo.titulo + ' atualizada com sucesso',
                            inclusao: false
                        });
                    },function(erro){
                        console.log(erro);
                        reject({
                            mensagem: 'Não foi possível atualizar a foto ' + photo.titulo
                        });
                    });
                }else{
                    Ajax.save(photo,function(){
                        
                        $rootScope.$broadcast(event);

                        resolve({
                            mensagem: 'Foto ' + photo.titulo + ' incluída com sucesso',
                            inclusao: true
                        });
                    },function(erro){
                        console.log(erro);
                        reject({
                            mensagem: 'Não foi possível incluir a foto ' + photo.titulo
                        });
                    });
                }
            });
        };
        return service;
    });