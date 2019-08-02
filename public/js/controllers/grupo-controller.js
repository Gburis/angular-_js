angular.module('alurapic')
    .controller('groupController',function($scope, $http){
        $scope.groups = [];

        $http.get('/v1/grupos')
        .success(function(group){

            console.log(group);
            $scope.groups = group;

        }).error(function(erro){

            console.log(erro);

        });
    });