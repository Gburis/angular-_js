angular.module('alurapic').controller("PhotosController", function($scope, Ajax){

	$scope.photos = [];
	$scope.filtro = '';
	$scope.mensagem = '';


	Ajax.query(function(photos){
		$scope.photos = photos;
	}, function(erro){
		console.log(erro);
	});

	$scope.remove = function(photo){

		Ajax.delete({photoId: photo._id}, function(resp){
			var indice = $scope.photos.indexOf(photo);
			$scope.photos.splice(indice, 1);
			$scope.mensagem = 'Foto ' + photo.titulo + ' removida com sucesso!';

		}, function(erro){
			console.log(erro);
			$scope.mensagem = 'Erro ao apagar foto ' + photo.titulo;

		});
		// $http.delete('/v1/fotos/' + photo._id)
		// .success(function(){
		// 	var indice = $scope.photos.indexOf(photo);
		// 	$scope.photos.splice(indice, 1);
		// 	$scope.mensagem = 'Foto ' + photo.titulo + ' removida com sucesso!';

		// }).error(function(error){
		// 	$scope.mensagem = 'Erro ao apagar foto ' + photo.titulo;
		// });
	}
});