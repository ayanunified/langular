/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('myApp.pages', [
        'myApp.pages.login'
    ]).config(routeConfig);

    /** @ngInject */
    function routeConfig($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise('/login');
                 
    }

    

})();
