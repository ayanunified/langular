/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function() {
    'use strict';

    angular.module('tripoAsiaApp.pages.accomodation')
        .controller('addonlistCtrl', addonlistCtrl);

    /** @ngInject */
    function addonlistCtrl($scope, $timeout, $httpParamSerializerJQLike, $ocLazyLoad, $http, configService, $rootScope, $location, $routeParams, accomodationService, SweetAlert)



    {
        $scope.accomodation = {};

        $scope.accomodation_id = $routeParams.accomodation_id;
        $scope.accomodation.accomodation_id = $routeParams.accomodation_id;



        $scope.goto_edit = function(id)

        {

            localStorage.setItem("id", "");
            localStorage.setItem("id", id);
            $location.path('AddonlistInsert/' + $scope.accomodation.accomodation_id);

            // setTimeout(function(){


            // },0);


        }

        $scope.delete = function(id) {

            var data = $.param({
                accomodation_id: $scope.accomodation_id,
                id: id

            });


            var config = {

                headers: {

                    'Content-Type': 'application/x-www-form-urlencoded',


                }

            }

            $http.post(configService.getEnvConfig().serverURL + 'addons/delete', data, config)
                .success(
                    function(data, status, headers, config) {
                        console.log(data);
                        $scope.addonlist = [];

                        $scope.init();




                    }).error(
                    function(data, status, header, config) {
                        console.log(data);
                        SweetAlert.swal("Error", "Error encountered while adding company .", "error");
                        // to prevent interaction outside of dialog



                    });



        }

        $scope.insert = function() {

            localStorage.setItem("list", "");
            localStorage.setItem("id", "");
        }
        $scope.init = function() {
            $scope.accomodation_id = $routeParams.accomodation_id;
            $scope.accomodation.accomodation_id = $routeParams.accomodation_id;

            $scope.addonlist = [];

            var data = $.param({
                accomodation_id: $scope.accomodation_id

            });


            var config = {

                headers: {

                    'Content-Type': 'application/x-www-form-urlencoded',


                }

            }

            $http.post(configService.getEnvConfig().serverURL + 'addons/show', data, config)
                .success(
                    function(data, status, headers, config) {
                        console.log(data);
                        $scope.addonlist = data.list;
                        setTimeout(function() {
                            localStorage.setItem("list", "");
                            localStorage.setItem("list", JSON.stringify($scope.addonlist));

                        }, 200);

                        console.log($scope.addonlist);

                    }).error(
                    function(data, status, header, config) {
                        console.log(data);
                        SweetAlert.swal("Error", "Error encountered while adding company .", "error");
                        // to prevent interaction outside of dialog



                    });

        }

        $scope.init();

    }
})();
