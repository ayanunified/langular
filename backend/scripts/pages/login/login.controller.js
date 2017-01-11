(function(){
	'use stirct';
	angular.module('myApp.pages.login')
	.controller('LoginController',LoginController);
	function LoginController ($scope,LoginService,$location)
	{
		$scope.email = '';
		$scope.password = '';
		$scope.lgnfrmsubmit = function()
		{
			LoginService.adminlogin($scope.email, $scope.password).then(function (result) {
               //Check user looged or not
               if(result.data.status ==1){
               		localStorage.setItem('api_token',result.data.api_token);
               	    $location.path("/afterlogin");
               }else{
               	$scope.error='Invalid  Details';
               	    //console.log(result);
               }

            });
		}
	}
})();