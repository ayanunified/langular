/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function() {
    'use strict';

    angular.module('tripoAsiaApp.components')
        .controller('pageTopCtrl', pageTopCtrl);

    /** @ngInject */
    function pageTopCtrl($scope, $timeout, $ocLazyLoad, $http, configService, $rootScope, $location, $routeParams, pageTopService) {

        /*scope objects/variables initializing*/
        $scope.username = '';

        /*logout logic*/
        $scope.logout = function() {
            pageTopService.logout(function(result) {
                if (result == 1) {
                    localStorage.removeItem("user_auth_token");
                    window.location.href = configService.getEnvConfig().frontApiURL;
                } else {
                    alert("cannot logout due to some problem");
                }
            });
        }

        /*user information loading*/
        $scope.load_user = function() {
            pageTopService.load_user(function(result) {
                $scope.username = result;
            });
        }

        /*home page link*/
        $scope.goToHomePage = function() {
            window.location.href = configService.getEnvConfig().frontApiURL;
        }
    }
})();


// var data = $.param({
//     auth_token: localStorage.getItem("user_auth_token")
// });

// $http.post(configService.getEnvConfig().serverURL + 'logout', data)
//     .success(
//         function(data, status, headers, config) {
//             console.log(data);
//             if (data.status == 1) {
//                 //localStorage.setItem("admin_auth_token", "");
//                 localStorage.removeItem("user_auth_token");
//                 console.log("logged out successfully!");
//                 //console.log(configService.getEnvConfig().apiURL);
//                 window.location.href = configService.getEnvConfig().frontApiURL;
//             } else {
//                 console.log("cannot logged out");
//             }
//         }).error(
//         function(data, status, header, config) {
//             console.log(status);
//             // to prevent interaction outside of dialog
//         });
