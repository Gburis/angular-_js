angular.module('alurapic')
    .controller('PhotoController', ['Ajax', '$routeParams', 'registerImage'], function($scope, Ajax, $routeParams, registerImage){

        $scope.photo = {};
        $scope.mensagem = '';

        // if($routeParams.photoId){
        //     $http.get('/v1/fotos/'+$routeParams.photoId)
        //     .success(function(photo){
        //         $scope.photo = photo;

        //     }).error(function(erro){
        //         console.log(erro);
        //         $scope.mensagem = 'Não foi possivel obter a foto';

        //     });
        // }

        if($routeParams.photoId){
            Ajax.get({ photoId: $routeParams.photoId }, function(photo){
                $scope.photo = photo;
            }, function(erro){
                console.log(erro);
                $scope.mensagem = 'Não foi possivel obter a foto';
            });
        }

        $scope.register = function(){
            if ($scope.formulario.$valid) {
                    registerImage.register($scope.photo)
                        .then(function(dados){
                            $scope.mensagem = dados.mensagem;
                            if(dados.inclusao) $scope.photo = {}
                            // $scope.$brodcast('registerImage');
                        })
                        .catch(function(erro){
                            $scope.mensagem = erro.mensagem;
                        });
                }
                // if($routeParams.photoId){
                    // Ajax.update({photoId: $scope.photo._Id}, 
                    //     $scope.photo, function(resp){
                    //     console.log(resp);
                    //     console.log($scope.photo);
                    //     $scope.mensagem = 'Foto alterada com sucesso';
                    //     $scope.photo = {};

                    // }, function(erro){
                    //     console.log(erro);
                    //     $scope.mensagem = 'não foi possivel alterar a foto';
                    // });
                    
                    //$http.put('/v1/fotos/' + $routeParams.photoId, $scope.photo)
                    //     .success(function(){
                    //         $scope.mensagem = 'Foto '+$scope.photo.titulo+' alterada';
                    //     }).error(function(erro){
                    //         console.log(erro);
                    //         $scope.mensagem = 'Não foi possível alterar';
                    //     });
                    
                // }else{
                //     Ajax.save($scope.photo, function(){
                //         console.log($scope.photo.titulo);
                //         $scope.photo = {};
                //         $scope.mensagem = 'Foto '+$scope.photo.titulo+' alterada';
                //     },function(erro){
                //         console.log(erro);
                //         $scope.mensagem = 'Não foi possível alterar';
                //     });
                    // $http.post('v1/fotos', $scope.photo)
                    // .success(function(){
                    //     $scope.mensagem = 'Foto adicionada com successo';
                    //     $scope.photo = {};
                    
                    // }).error(function(erro){
                    //     $scope.mensagem = 'Não foi possível cadastrar a foto';

                    // });
                    
                //}
           // }
        }
    })