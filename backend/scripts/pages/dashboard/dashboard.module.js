/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('tripoAsiaApp.pages.dashboard', [])
            .config(routeConfig);

    /** @ngInject */
    function routeConfig($routeProvider) {
        $routeProvider
                .when('/', {
                    templateUrl: 'scripts/pages/dashboard/dashboard.html',
                    controller: 'DashboardPageCtrl',
                    resolve: {
                        transactions: function (TransactionService) {
                            return TransactionService.getTransList();
                        }
                    }
                });
    }
})();
