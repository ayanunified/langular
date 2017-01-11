/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('tripoAsiaApp.pages', [
        'tripoAsiaApp.pages.dashboard',
        'tripoAsiaApp.pages.accomodation',
        'tripoAsiaApp.pages.partner',
        'tripoAsiaApp.pages.transaction'
    ]).config(routeConfig);

    /** @ngInject */
    function routeConfig($routeProvider) {
        $routeProvider.otherwise('/');
    }

})();
