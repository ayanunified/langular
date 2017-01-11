'use strict';
/**
 * @ngdoc overview
 * @name psnApp
 * @description
 * # psnApp
 *
 * Main module of the application.
 */

var app = angular.module(
        'myApp', [
            'ui.router',
            'myApp.pages',
            'app.config',
            'config.service',
            'SingularHttp',
            'angularValidator',
        ])
        .config(function ($httpProvider) {
            $httpProvider.defaults.headers.post = {'Content-Type': 'application/x-www-form-urlencoded'};
        })
        .run(function ($rootScope, $location) {
            
        })
        .controller('indexcontroller',function($location,$state){
          
        })
        .filter('trim', function () {

        });
