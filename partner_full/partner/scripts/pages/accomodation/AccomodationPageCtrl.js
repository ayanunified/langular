/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function() {
    'use strict';

    angular.module('tripoAsiaApp.pages.accomodation')
        .controller('AccomodationPageCtrl', AccomodationPageCtrl);

    /** @ngInject */
    function AccomodationPageCtrl($scope, $timeout, $ocLazyLoad, $http, configService, $rootScope, $location, $routeParams, accomodationService, SweetAlert) {
        /*scope variable initializing*/
        $scope.accomodation = {};
        $scope.pageinfo = {};
        $scope.pageinfo.currentLimit = '2';
        $scope.pageinfo.currentPage = '1';
        $scope.last_id = '';
        $scope.room_features = {};
        $scope.addroomfeature = {};
        $scope.edit_room_feature = {};
        /*url checking blocks for accomodation listing*/
        if ($routeParams.category != 'Hotels' && $routeParams.category != 'Villas' && $routeParams.category != 'Resorts') {
            $location.path('/');
        }

        $rootScope.acc_type = $routeParams.category;

        /*url checking for accomodation wise partner dashboard*/
        if ($routeParams.accomodation_id != undefined) {
            if (isNaN($routeParams.accomodation_id) == true) {
                $location.path('/');
            }
        }

        /*url checking for room features edit*/
        if ($routeParams.room_features_id != undefined) {
            if (isNaN($routeParams.room_features_id) == true) {
                $location.path('/');
            }
        }

        /*loading accomodation controller*/
        $scope.accomodationLoad = function() {
            accomodationService.list($scope.pageinfo, function(result) {
                var last_id = (result.page - 1) * (result.limit);
                if (last_id == 0) {
                    $scope.last_id = 1;
                } else {
                    $scope.last_id = last_id + 1;
                }
                $scope.accomodation = result;
                $scope.accomodation_type = $routeParams.category;

            });
        }

        /*check the accomodation_id is for that user or not*/
        $scope.checkForUserUrl = function() {
            accomodationService.checkUser(function(result) {
                if (result != 1) {
                    var url = '/accomodation/' + $routeParams.category;
                    $location.path(url);
                } else {
                    $scope.accomodation.category = $routeParams.category;
                    $scope.accomodation.accomodation_id = $routeParams.accomodation_id;
                }
            });
        }



    }
})();
