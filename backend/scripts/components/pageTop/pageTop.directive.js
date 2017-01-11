/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function() {
    'use strict';

    angular.module('tripoAsiaApp.components')
        .directive('pageTop', pageTop);

    /** @ngInject */
    function pageTop() {
        return {
            restrict: 'E',
            templateUrl: 'scripts/components/pageTop/pageTop.html',
            controller: 'pageTopCtrl'
        };
    }

})();
