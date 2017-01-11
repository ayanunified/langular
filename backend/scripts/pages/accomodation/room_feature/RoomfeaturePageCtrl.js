/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function() {
    'use strict';

    angular.module('tripoAsiaApp.pages.accomodation')
        .controller('RoomfeaturePageCtrl', RoomfeaturePageCtrl);

    /** @ngInject */
    function RoomfeaturePageCtrl($scope, $timeout, $ocLazyLoad, $http, configService, $rootScope, $location, $routeParams, accomodationService, roomfeatureService, SweetAlert) {

        /*scope variable initializing*/
        $scope.base_url = configService.getEnvConfig().serverURL;
        $scope.accomodation = {};
        $scope.pageinfo = {};
        $scope.pageinfo.currentLimit = '2';
        $scope.pageinfo.currentPage = '1';
        $scope.last_id = '';
        $scope.room_features = {};
        $scope.addroomfeature = {};
        $scope.edit_room_feature = {};
        $scope.imagefilesize_valid = 1;
        $scope.image_man = 0;
        /*image type check*/
        $scope.setimagefilesize_valid = function(v, val) {
            $scope.imagefilesize_valid = v;
            $scope.image_man = 0;
            if (v == 0) {
                setTimeout(function() {
                    $('#image').remove();
                    $('.image_preview').html("<img id='image'>");
                }, 1000);
                $scope.addroomfeature.icon = '';
                $scope.edit_room_feature.icon = '';
            }
        };

        /*url checking blocks for accomodation listing*/
        if ($routeParams.category != 'Hotels' && $routeParams.category != 'Villas' && $routeParams.category != 'Resorts') {
            $location.path('/roomfeature/' + $routeParams.category + '/' + $routeParams.accomodation_id);
        }
        $rootScope.acc_type = $routeParams.category;

        /*url checking for accomodation wise partner dashboard*/
        if ($routeParams.accomodation_id != undefined) {
            if (isNaN($routeParams.accomodation_id) == true) {
                $location.path('/roomfeature/' + $routeParams.category + '/' + $routeParams.accomodation_id);
            }
        }

        /*url checking for room features edit*/
        if ($routeParams.room_features_id != undefined) {
            if (isNaN($routeParams.room_features_id) == true) {
                $location.path('/roomfeature/' + $routeParams.category + '/' + $routeParams.accomodation_id);
            }
        }

        /*check the accomodation_id is for that user or not*/
        $scope.checkForUserUrl = function() {
            roomfeatureService.checkUser(function(result) {
                if (result != 1) {
                    var url = '/accomodation/' + $routeParams.category;
                    $location.path(url);
                } else {
                    $scope.accomodation.category = $routeParams.category;
                    $scope.accomodation.accomodation_id = $routeParams.accomodation_id;
                }
            });
        }

        /*room feature listing*/
        $scope.roomfeatureLoad = function() {
            roomfeatureService.roomfeaturelist(function(result) {
                $scope.room_features = result;
                //console.log($scope.room_features);
                $scope.accomodation.category = $routeParams.category;
                $scope.accomodation.accomodation_id = $routeParams.accomodation_id;

            });
        }

        /*room feature insert*/
        $scope.roomfeatureInsert = function() {
            if ($scope.addroomfeature.icon == undefined) {
                $scope.image_man = 1;
            } else {
                if ($scope.imagefilesize_valid) {

                    roomfeatureService.roomfeatureInsert($scope.addroomfeature, function(result) {
                        if (result == 202) {
                            SweetAlert.swal("Duplicate", "This name already exists :)", "error");
                        } else if (result == 1) {
                            SweetAlert.swal("Inserted!", "Your data has been inserted.", "success");
                            var category = $routeParams.category;
                            var id = $routeParams.accomodation_id;
                            $location.path('/roomfeature/' + category + '/' + id);
                        } else {
                            SweetAlert.swal("ERROR", "Unable to insert :)", "error");
                        }
                    });

                }
            }


        }


        /*room feature fetch row*/
        $scope.roomfeatureRow = function() {
            roomfeatureService.roomfeatureRow(function(result) {
                if (result == 0) {
                    SweetAlert.swal("Access Denied", "cannot give access to open :)", "error");
                    var category = $routeParams.category;
                    var id = $routeParams.accomodation_id;
                    $location.path('/roomfeature/' + category + '/' + id);
                } else {
                    $scope.edit_room_feature = result[0];
                }
            });
        }

        /*room feature edit row*/
        $scope.roomfeatureEdit = function() {
            if ($scope.imagefilesize_valid) {
                roomfeatureService.roomfeatureEdit($scope.edit_room_feature, function(result) {
                    if (result == 202) {
                        SweetAlert.swal("Duplicate", "This name already exists :)", "error");
                    } else if (result == 1) {
                        SweetAlert.swal("Saved!", "Your data has been saved.", "success");
                        var category = $routeParams.category;
                        var id = $routeParams.accomodation_id;
                        $location.path('/roomfeature/' + category + '/' + id);
                    } else {
                        SweetAlert.swal("ERROR", "Unable to save  :)", "error");
                    }
                });
            }
        };
        $scope.changeTheImage = function(files) {

            console.log(files);

            var reader = new FileReader();
            var image = new Image();
            if (files[0] instanceof Blob) {

                // read the image file as a data URL.
                reader.readAsDataURL(files[0]);
                reader.onload = function(e) {
                    image.src = e.target.result;
                    image.onload = function() {
                        var w = this.width,
                            h = this.height,
                            t = files[0].type, // ext only: // file.type.split('/')[1],
                            n = files[0].name,
                            s = ~~(files[0].size / 1024);
                        alert(w);
                        // alert(t);
                        // alert(s);
                        // var image_type_arr = t.split("/");
                        // var image_type = image_type_arr[1].toLowerCase();
                        // //alert(image_type);

                        // if (!(image_type === 'jpg' ||
                        //         image_type === 'jpeg' ||
                        //         image_type === 'png' ||
                        //         image_type === 'gif')) {
                        //     sweetAlert("Oops...", "Not a valid image type.Please use jpg/jpeg/png/gif type image.", "error");
                        //     $scope.show_loader = 0;
                        //     $scope.$digest();
                        //     return;
                        // } else if (!t.match("image.*")) {
                        //     $scope.show_loader = 0;
                        //     $scope.$digest();
                        //     return;
                        // }
                        // //alert(f.size);
                        // else if (s > 2 * 1024) {
                        //     $scope.show_loader = 0;
                        //     sweetAlert("Oops...", "Image size should be less than 2MB", "error");
                        //     $scope.$digest();
                        //     return;
                        // } else if (w < 300) {
                        //     $scope.show_loader = 0;
                        //     sweetAlert("Oops...", "Image width should not be less than 300 px", "error");
                        //     $scope.$digest();
                        //     return;
                        // } else if (h < 300) {
                        //     $scope.show_loader = 0;
                        //     sweetAlert("Oops...", "Image height should not be less than 300 px", "error");
                        //     $scope.$digest();
                        //     return;
                        // } else {
                        //     $scope.myagentslist[i].background = "background-image:url(" + this.src + ")";

                        //     $scope.show_loader = 0;
                        //     $scope.$digest();

                        // }




                    };
                    image.onerror = function() {
                        sweetAlert("Oops...", "Invalid file type: " + files[0].type, "error");
                        $scope.show_loader = 0;
                        $scope.$digest();
                    };
                };
            } else {
                if (typeof files[0] == 'undefined') {
                    sweetAlert("Oops...", "No file selected", "error");
                } else
                    sweetAlert("Oops...", "Invalid file type: " + files[0].type, "error");
                $scope.show_loader = 0;
                $scope.$digest();
            }

        };
        /*room feature delete row*/
        $scope.deleteroomFeature = function(val) {

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
                        roomfeatureService
                            .roomfeatureDelete(val, function(result) {
                                if (result == 1) {
                                    SweetAlert.swal("Deleted!", "Your data has been deleted.", "success");
                                    $scope.roomfeatureLoad();
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
