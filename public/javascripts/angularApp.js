angular.module('PblApp', ['ui.router' ,'appFilters','pbl-controller', 'pbl-service'])
.config([
 	'$stateProvider'
 	,'$urlRouterProvider'
 	,'$locationProvider'
 	,function ($stateProvider, $urlRouterProvider, $locationProvider) {

 		$stateProvider 		
 			.state('pbl', {
 				url: '/'
 				//,abstract : true
 				//,template: '<ui-view/>'
 				,templateUrl: 'templates'
 				,controller: 'PickByLight' 			
  			})

  		;

	$urlRouterProvider.otherwise('/');

	;
}]);

 