/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('tripoAsiaApp.pages.dashboard')
            .controller('DashboardPageCtrl', DashboardPageCtrl);

    /** @ngInject */
    function DashboardPageCtrl($scope, $timeout, $ocLazyLoad, $http, configService, $rootScope, $location, $routeParams, dashboardService, transactions, TransactionService) {
        $scope.viewDetails = {};
        $rootScope.acc_type = "Dashboard";


        /*check the accomodation_id is for that user or not*/
        $scope.getdetails = function () {
            dashboardService.getdetails(function (result) {

                if (result.status == 1) {
                    $scope.viewDetails = result.data;
                } else {
                    $scope.viewDetails.hotel = $scope.viewDetails.villa = $scope.viewDetails.resort = 0;
                }
            });
        };

//        $scope.cowner = true;

        $scope.translist = [];
        $scope.translist = TransactionService.precessTransaction(transactions);

        console.log("$scope.translist", $scope.translist);
    }
})();
