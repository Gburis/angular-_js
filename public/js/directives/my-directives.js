angular.module('myDirectives',[])
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
	});