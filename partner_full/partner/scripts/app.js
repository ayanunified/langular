'use strict';
/**
 * @ngdoc overview
 * @name psnApp
 * @description
 * # psnApp
 *
 * Main module of the application.
 */
var checkisLogin = function (configService) {
    var user_auth_token = localStorage.getItem("user_auth_token");
    if (typeof user_auth_token == 'undefined' || user_auth_token == "" || user_auth_token == null) {
        window.location.href = configService.getEnvConfig().frontApiURL;
    }
}
var check_auth = function () {
    var user_auth_token = localStorage.getItem("user_auth_token");
    if (typeof user_auth_token == 'undefined' || user_auth_token == "" || user_auth_token == null) {
        window.location.href = '../';
    }
}
check_auth();
var app = angular.module(
        'tripoAsiaApp', [
            'ngAnimate',
            'ngCookies',
            'ngResource',
            'ngRoute',
            'ngSanitize',
            'ngMessages',
            'validation.match',
            'angular-loading-bar',
            'app.config',
            'oc.lazyLoad',
            'config.service',
            'ngMaterial',
            'angularjs-dropdown-multiselect',
            'hljs',
            'ui.bootstrap',
            'angularPayments',
            'ngIdle',
            'tableSort',
            'angularValidator',
            'oitozero.ngSweetAlert',
            '720kb.datepicker',
            'tripoAsiaApp.pages',
            'tripoAsiaApp.components',
            'SingularHttp'
        ])
        .config(function ($httpProvider) {
            $httpProvider.defaults.headers.post = {'Content-Type': 'application/x-www-form-urlencoded'};
        })
        .run(function ($rootScope, $location, shttp, configService) {
            
        })
        .filter('trim', function () {

        });
/*Index Controller*/
app.controller('indexcontroller', function (Idle, $compile, $interval, $rootScope, $location, $http, SweetAlert, configService, $mdDialog, $scope, $filter, $timeout) {



});