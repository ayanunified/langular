(function()
{
	'use strict';
	angular.module('myApp.pages.login',[])
				.config(stateConfig);
	function stateConfig($stateProvider)
	{
		$stateProvider
					.state('login',{
						url: '/login',
		                templateUrl: 'scripts/pages/login/login.html',
		                controller: 'LoginController',
		                
					}).state('afterlogin',{
						url: '/afterlogin',
		                templateUrl: 'scripts/pages/login/afterlogin.html',
		                controller: 'LoginController',
		                
					});

	}
})();