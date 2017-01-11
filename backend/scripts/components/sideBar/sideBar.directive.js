/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function() {
    'use strict';

    angular.module('tripoAsiaApp.components')
        .directive('sideBar', sideBar);

    /** @ngInject */
    function sideBar() {
        return {
            restrict: 'E',
            templateUrl: 'scripts/components/sideBar/sideBar.html',
            controller: 'sideBarCtrl'
        };
    }

})();
