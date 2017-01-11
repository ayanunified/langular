/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function() {
    'use strict';

    angular.module('tripoAsiaApp.pages.accomodation')
        .controller('RoomPageCtrl', RoomPageCtrl);

    /** @ngInject */
    function RoomPageCtrl($scope, $timeout, $ocLazyLoad, $http, configService, $rootScope, $location, $routeParams, accomodationService, roomService, SweetAlert) {
        /*scope variable initializing*/
        $scope.Pricetype = [{ 'id': 'tripo', 'value': 'TRIPO CREDIT' },
            { 'id': 'cash', 'value': 'CASH' },
            { 'id': 'both', 'value': 'TRIPO CREDIT & CASH' }
        ];

        $scope.accomodation = {};
        $scope.listing = 1;
        $scope.add_edit = 0;
        $scope.room = {};
        $scope.show_room = {};
        var form_submit_type = 0;
        var room_no_id = 0;
        $scope.heading = "";
        //$scope.room.price_type = $scope.Pricetype[0].id;
        $scope.show_add = function() {
            $scope.listing = 0;
            $scope.add_edit = 1;
            $scope.room.room_no = "";
            $scope.room.price_type = $scope.Pricetype[0].id;
            form_submit_type = 1;
            $scope.heading = "Add Room";
        }
        $scope.show_list = function() {
            $scope.listing = 1;
            $scope.add_edit = 0;
        }

        /*url checking blocks for accomodation listing*/
        if ($routeParams.category != 'Hotels' && $routeParams.category != 'Villas' && $routeParams.category != 'Resorts') {
            $location.path('/roomtypes/' + $routeParams.category + '/' + $routeParams.accomodation_id);
        }
        $rootScope.acc_type = $routeParams.category;

        /*url checking for accomodation wise partner dashboard*/
        if ($routeParams.accomodation_id != undefined) {
            if (isNaN($routeParams.accomodation_id) == true) {
                $location.path('/roomtypes/' + $routeParams.category + '/' + $routeParams.accomodation_id);
            }
        }

        /*url checking for room features edit*/
        if ($routeParams.room_types_id != undefined) {
            if (isNaN($routeParams.room_types_id) == true) {
                $location.path('/roomtypes/' + $routeParams.category + '/' + $routeParams.accomodation_id);
            }
        }

        /*check the accomodation_id is for that user or not*/

        roomService.checkUser(function(result) {
            if (result == 1) {
                $scope.accomodation.category = $routeParams.category;
                $scope.accomodation.accomodation_id = $routeParams.accomodation_id;
            } else if (result == 0) {
                SweetAlert.swal("Access denied", "cannot give access to open this url :)", "error");
                var url = '/roomtypes/' + $routeParams.category + '/' + $routeParams.accomodation_id;
                $location.path(url);
            } else {
                SweetAlert.swal("ERROR", "some problem occured :)", "error");
                var url = '/roomtypes/' + $routeParams.category + '/' + $routeParams.accomodation_id;
                $location.path(url);
            }
        });

        $scope.rooms_list = function() {
            roomService.rooms_list(function(result) {
                if (result == 404) {
                    SweetAlert.swal("ERROR", "404 :)", "error");
                } else {
                    $scope.show_room = result.list;
                }
            });
        }

        $scope.roomInsert = function() {
            if (form_submit_type == 1) {
                roomService.roomInsert($scope.room, function(result) {
                    if (result == 202) {
                        SweetAlert.swal("Duplicate", "This name already exists :)", "error");
                    } else if (result == 1) {
                        SweetAlert.swal("Inserted!", "Your data has been inserted.", "success");
                        $scope.show_list();
                        $scope.rooms_list();
                    } else if (result == 0) {
                        SweetAlert.swal("ERROR", "unable to insert :)", "error");
                    } else {
                        SweetAlert.swal("ERROR", "404 :)", "error");
                    }
                });
            } else {
                roomService.roomEdit(room_no_id, $scope.room, function(result) {
                    if (result == 202) {
                        SweetAlert.swal("Duplicate", "This name already exists :)", "error");
                    } else if (result == 1) {
                        SweetAlert.swal("SUCCESS!", "Your data has been updated.", "success");
                        $scope.show_list();
                        $scope.rooms_list();
                    } else if (result == 0) {
                        SweetAlert.swal("ERROR", "unable to update :)", "error");
                    } else {
                        SweetAlert.swal("ERROR", "404 :)", "error");
                    }
                });
            }

        }

        $scope.edit = function(val) {
            var rooms_arr = $scope.show_room.rooms;
            for (var i in rooms_arr) {
                if (rooms_arr[i]._id == val) {
                    $scope.room.room_no = rooms_arr[i].number;
                    $scope.room.price_type = rooms_arr[i].price_type;
                    break;
                }
            }
            $scope.listing = 0;
            $scope.add_edit = 1;
            form_submit_type = 2;
            room_no_id = val;
            $scope.heading = "Edit Room";
        }

        $scope.delete = function(val) {

            SweetAlert.swal({
                    title: "Are you sure?",
                    text: "You will not be able to recover this data again!",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: "Yes, delete it!",
                    cancelButtonText: "No, cancel plx!",
                    closeOnConfirm: false,
                    closeOnCancel: false
                },
                function(isConfirm) {
                    if (isConfirm) {
                        roomService.roomDelete(val, function(result) {
                            if (result == 1) {
                                SweetAlert.swal("Deleted!", "Your data has been deleted.", "success");
                                $scope.rooms_list();
                            } else {
                                SweetAlert.swal("Cannot delete", "Your file cannot delete due to some problem :)", "error");
                            }
                        });

                    } else {
                        SweetAlert.swal("Cancelled", " :)", "error");
                    }
                });
        }

    }
})();
