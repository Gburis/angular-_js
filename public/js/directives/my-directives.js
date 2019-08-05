angular.module('myDirectives',['myService'])
	.directive('myPanel', function(){

		return {

			restrict: 'AE',
			scope: {
				titulo :'@'
			},
			transclude: true,
			templateUrl:  'js/directives/may-panel.html'
		}	
		
	}).directive('search', function(){

		return {
			restrict: 'AE',
			templateUrl:  'js/directives/search.html'
		}

	}).directive('myImage', function(){
		return{

			restrict: 'AE',
			scope:{
				image : '@',
				title :	'@'
			},
			template: '<img src="{{image}}" alt="{{title}}" style="width:100%;">'
		}
		
	}).directive('btnDanger', function(){
		return{
			rettric: 'E',
			scope:{
				name : '@',
				action : '&'
			},
			template: '<button class="btn btn-danger btn-block" ng-click="action()">{{name}}</button>'
		}
	}).directive('myFocus', function(){
		return{
			restrict: 'A',
			// scope:{
			// 	focado: '='
			// },
			link: function(scope, element){
				scope.$on('registerImage', function(){
					element[0].focus();
					// if(scope.focado){
					// 	element[0].focus();
					// 	scope.focado = false;
					// }
				});
			}
		}
	}).directive('myTitle', function(){
		return {
			restrict: 'E',
			template: '<ul><li ng-repeat="titulo in titulos">{{titulo}}</li></ul>',
			controller: function($scope, Ajax){
				Ajax.query(function(photos){
					$scope.titulos = photos.map(function(photo){
						return photo.titulo;
					});
				})
			}
		}
	});