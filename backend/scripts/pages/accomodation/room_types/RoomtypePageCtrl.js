/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function() {
    'use strict';

    angular.module('tripoAsiaApp.pages.accomodation')
        .controller('RoomtypePageCtrl', RoomtypePageCtrl);

    /** @ngInject */
    function RoomtypePageCtrl($scope, $timeout, $ocLazyLoad, $http, configService, $rootScope, $location, $routeParams, roomtypeService, roomfeatureService, SweetAlert) {
        /*scope variable initializing*/
        $scope.base_url = configService.getEnvConfig().serverURL;
        $scope.accomodation = {};
        $scope.imagefilesize_valid = 1;
        $scope.images = [];
        $scope.msgone = [];
        $scope.msgtwo = [];
        $scope.room = {};
        $scope.room.addroomtype = [];
        $scope.image_uploaded = [];
        $scope.optionOne = [];
        $scope.optionTwo = [];
        //$scope.room.max = {};
        // $scope.room.baths = $scope.room.hbaths = '1';
        $scope.room.featuresCheckbox = [];
        $scope.room.addonCheckbox = [];

        $scope.editroom = {};
        $scope.editroom.addroomtype = [];
        $scope.editroom.beds = $scope.editroom.baths = $scope.editroom.hbaths = '1';
        $scope.editroom.featuresCheckbox = [];
        // for (var i = 1; i <= 10; i++) {
        //     $scope.optionTwo.push(i);
        // }
        $scope.optionOne = [
            { 'id': 1, 'val': 'One' },
            { 'id': 2, 'val': 'Two' },
            { 'id': 3, 'val': 'Three' },
            { 'id': 4, 'val': 'Four' },
            { 'id': 5, 'val': 'Five' },
            { 'id': 6, 'val': 'Six' },
            { 'id': 7, 'val': 'Seven' },
            { 'id': 8, 'val': 'Eight' },
            { 'id': 9, 'val': 'Nine' },
            { 'id': 10, 'val': 'Ten' }
        ];
        $scope.optionTwo = $scope.optionOne;
        $scope.optionTwo.push({ 'id': 11, 'val': ' Ten +' });
        //$scope.room.max.childs = $scope.room.max.adults = $scope.room.baths = $scope.room.hbaths = $scope.room.beds = $scope.optionOne[0].id;
        $scope.room.max = $scope.room.baths = $scope.room.hbaths = $scope.room.beds = $scope.optionOne[0].id;
        /*Add More*/
        $scope.addMore = function() {
            var timestamp = new Date().getUTCMilliseconds();
            var flag = 0;
            if ($scope.images.length > 0) {
                for (var i = 0; i < $scope.images.length; i++) {
                    var image = "image_file_" + $scope.images[i];
                    if (document.getElementById(image).src == "") {
                        $scope.msgone[$scope.images[i]] = 1;
                        $scope.msgtwo[$scope.images[i]] = 0;
                        flag = 1;
                        break;
                    } else {
                        $scope.msgone[$scope.images[i]] = 0;
                        $scope.msgtwo[$scope.images[i]] = 0;
                        //$scope.image_uploaded[i] = 1;
                    }
                }
                if (flag == 1) {
                    //console.log("first upload");
                } else {
                    $scope.images.push(timestamp);
                    $scope.msgone[timestamp] = 0;
                    $scope.msgtwo[timestamp] = 0;
                    //$scope.image_uploaded[timestamp] = 0;
                    //console.log($scope.images);
                }
            } else {
                $scope.images.push(timestamp);
                $scope.msgone[timestamp] = 0;
                $scope.msgtwo[timestamp] = 0;
                //$scope.image_uploaded[timestamp] = 0;
                //console.log($scope.images);
            }
        }

        /*image type check*/
        $scope.setimagefilesize_valid = function(v, val) {
            var index = val.split("_");
            index = index[index.length - 1];

            $scope.msgtwo[index] = !v;
            $scope.image_uploaded[index] = v;
            $scope.imagefilesize_valid = v;
            if (v == 0) {
                $scope.msgone[index] = v;
                setTimeout(function() {
                    $('#image_file_' + index).remove();
                    $('#image_preview_' + index).html("<img id='image_file_" + index + "'>");
                }, 1000);
                //$scope.addroomfeature.icon = '';
            }

        };

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
        $scope.checkForUserUrl = function() {
            roomtypeService.checkUser(function(result) {
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
        $scope.roomtypeList = function() {
            roomtypeService.roomtypelist(function(result) {
                $scope.room_types = result;
                $scope.accomodation.category = $routeParams.category;
                $scope.accomodation.accomodation_id = $routeParams.accomodation_id;

            });
        }

        /*room type features show*/
        $scope.showRoomFeatures = function() {
            roomfeatureService.roomfeaturelist(function(result, result1) {
                $scope.features = result;
                $scope.addons = result1;
            });
        }

        /*room type insert*/
        $scope.roomtypeInsert = function() {
            if ($scope.imagefilesize_valid) {
                var image_arr_len = $scope.room.addroomtype.length;
                if ($scope.room.featuresCheckbox.length != 0) {
                    var flag = 0;
                    var features = $scope.room.featuresCheckbox;
                    for (var key in features) {
                        if (features[key] == true) {
                            flag = 1;
                            break;
                        }
                    }
                    if (flag == 1) {
                        if (image_arr_len != 0) {
                            if ($scope.room.default_image != undefined) {
                                submitMethod();
                            } else {
                                SweetAlert.swal("MANDATORY", "making default image is manadatory :)", "error");
                            }
                        } else {
                            submitMethod();
                        }
                    } else {
                        SweetAlert.swal("MANDATORY", "check atleast 1 feature :)", "error");
                    }
                } else {
                    SweetAlert.swal("MANDATORY", "check atleast 1 feature :)", "error");
                }
            }
        }

        /*main submit method after checking,validations */
        function submitMethod() {
            console.log($scope.room);
            roomtypeService.roomtypeInsert($scope.room, function(result) {
                if (result == 202) {
                    SweetAlert.swal("Duplicate", "This name already exists :)", "error");
                } else if (result == 1) {
                    SweetAlert.swal("Inserted!", "Your data has been inserted.", "success");
                    var category = $routeParams.category;
                    var id = $routeParams.accomodation_id;
                    $location.path('/roomtypes/' + category + '/' + id);
                } else if (result == 404) {
                    SweetAlert.swal("ERROR", "cannot insert due to wrong file uploaded:)", "error");
                } else {
                    SweetAlert.swal("ERROR", "Unable to insert :)", "error");
                }
            });

        }

        /*room feature fetch row*/
        $scope.roomTypeRow = function() {
            roomtypeService.roomtypeRow(function(result) {
                if (result == 0) {
                    SweetAlert.swal("Access Denied", "cannot give access to open :)", "error");
                    var category = $routeParams.category;
                    var id = $routeParams.accomodation_id;
                    $location.path('/roomtypes/' + category + '/' + id);
                } else {
                    $scope.room = result[0];
                    $scope.room.featuresCheckbox = [];
                    if ($scope.room.feature.length != 0) {
                        for (var x in $scope.room.feature) {
                            var index = $scope.room.feature[x]['featureId'];
                            $scope.room.featuresCheckbox[index] = true;
                        }
                    }
                    $scope.room.addonCheckbox = [];
                    //console.log("highlighted", $scope.room);
                    if ($scope.room.addon_ids.length != 0) {
                        for (var x in $scope.room.addon_ids) {
                            var index = $scope.room.addon_ids[x];
                            $scope.room.addonCheckbox[index] = true;
                        }
                    }

                    if ($scope.room.images.length != 0) {
                        //$rootScope.images_arr = $scope.room.images;
                        $scope.images = [];
                        for (var y in $scope.room.images) {
                            var timestamp = Math.floor((Math.random() * 100) + 1);
                            $scope.images.push(timestamp);
                            $scope.image_uploaded[timestamp] = 0;
                            //console.log(timestamp, '0');
                            // var image = "image_file_" + timestamp;
                            //console.log(image);
                        }
                        //console.log($scope.images);
                    }
                }
            });
        }

        $scope.image_uploadeds = function() {
            setTimeout(function() {
                for (var z in $scope.images) {
                    var image = "image_file_" + $scope.images[z];
                    document.getElementById(image).src = $scope.room.images[z].path;
                    $scope.image_uploaded[$scope.images[z]] = 1;
                    if ($scope.room.images[z].is_default == 1)
                        $scope.room.default_image = z;
                    $scope.$apply();
                }
            }, 3000);

        }

        /*Edit room type*/
        // features.hasOwnProperty(key)
        $scope.roomtypeEdit = function() {
            //console.log($scope.room);
            var flag = 0;
            if ($scope.imagefilesize_valid) {
                var image_arr = $scope.room.addroomtype;
                var features = $scope.room.featuresCheckbox;
                for (var key in features) {
                    if (features[key] == true) {
                        flag = 1;
                        break;
                    }
                }
                if (flag == 1) {
                    if (image_arr != undefined) {
                        if ($scope.room.default_image != undefined) {
                            editSubmitMethod();
                        } else {
                            SweetAlert.swal("MANDATORY", "making default image is manadatory :)", "error");
                        }
                    } else {
                        editSubmitMethod();
                    }
                } else {
                    SweetAlert.swal("MANDATORY", "check atleast 1 feature :)", "error");
                }
            }
        }

        function editSubmitMethod() {
            roomtypeService.roomtypeEdit($scope.room, function(result) {
                if (result == 202) {
                    SweetAlert.swal("Duplicate", "This name already exists :)", "error");
                } else if (result == 1) {
                    SweetAlert.swal("Updated!", "Your data has been updated.", "success");
                    var category = $routeParams.category;
                    var id = $routeParams.accomodation_id;
                    $location.path('/roomtypes/' + category + '/' + id);
                } else if (result == 404) {
                    SweetAlert.swal("ERROR", "cannot update due to wrong file uploaded:)", "error");
                } else {
                    SweetAlert.swal("ERROR", "Unable to update :)", "error");
                }
            });
        }

        /*room feature delete row*/
        $scope.deleteroomType = function(val) {

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
                        roomtypeService.roomTypeDelete(val, function(result) {
                            if (result == 1) {
                                SweetAlert.swal("Deleted!", "Your data has been deleted.", "success");
                                $scope.roomtypeList();
                            } else {
                                SweetAlert.swal("Cannot delete", "Your file cannot delete due to some problem :)", "error");
                            }
                        });

                    } else {
                        SweetAlert.swal("Cancelled", " :)", "error");
                    }
                });
        }

        /*room type feature change*/
        $scope.makeFeature = function(val) {

            roomtypeService.makeFeature(val, function(result) {
                if (result == 1) {
                    SweetAlert.swal("Updated!", "This room type updated successfully.", "success");
                    $scope.roomtypeList();
                } else {
                    SweetAlert.swal("Cannot update", "Your item cannot update due to some problem :)", "error");
                }
            });
        }

    }
})();


//$scope.image_uploadeds();

//document.getElementById(image).src == $scope.room.images[y].path;
//$scope.room.default_image[y] = $scope.room.images[y].is_default;

//$scope.roomTypeRow();
// /*room feature edit row*/
// $scope.roomfeatureEdit = function() {
//     roomfeatureService.roomfeatureEdit($scope.edit_room_feature, function(result) {
//         if (result == 1) {
//             SweetAlert.swal("Saved!", "Your data has been saved.", "success");
//             var category = $routeParams.category;
//             var id = $routeParams.accomodation_id;
//             $location.path('/roomfeature/' + category + '/' + id);
//         } else {
//             SweetAlert.swal("ERROR", "Unable to save  :)", "error");
//         }
//     });
// };
// $scope.changeTheImage = function(files) {

//     console.log(files);

//     var reader = new FileReader();
//     var image = new Image();
//     if (files[0] instanceof Blob) {

//         // read the image file as a data URL.
//         reader.readAsDataURL(files[0]);
//         reader.onload = function(e) {
//             image.src = e.target.result;
//             image.onload = function() {
//                 var w = this.width,
//                     h = this.height,
//                     t = files[0].type, // ext only: // file.type.split('/')[1],
//                     n = files[0].name,
//                     s = ~~(files[0].size / 1024);
//                 alert(w);
//                 // alert(t);
//                 // alert(s);
//                 // var image_type_arr = t.split("/");
//                 // var image_type = image_type_arr[1].toLowerCase();
//                 // //alert(image_type);

//                 // if (!(image_type === 'jpg' ||
//                 //         image_type === 'jpeg' ||
//                 //         image_type === 'png' ||
//                 //         image_type === 'gif')) {
//                 //     sweetAlert("Oops...", "Not a valid image type.Please use jpg/jpeg/png/gif type image.", "error");
//                 //     $scope.show_loader = 0;
//                 //     $scope.$digest();
//                 //     return;
//                 // } else if (!t.match("image.*")) {
//                 //     $scope.show_loader = 0;
//                 //     $scope.$digest();
//                 //     return;
//                 // }
//                 // //alert(f.size);
//                 // else if (s > 2 * 1024) {
//                 //     $scope.show_loader = 0;
//                 //     sweetAlert("Oops...", "Image size should be less than 2MB", "error");
//                 //     $scope.$digest();
//                 //     return;
//                 // } else if (w < 300) {
//                 //     $scope.show_loader = 0;
//                 //     sweetAlert("Oops...", "Image width should not be less than 300 px", "error");
//                 //     $scope.$digest();
//                 //     return;
//                 // } else if (h < 300) {
//                 //     $scope.show_loader = 0;
//                 //     sweetAlert("Oops...", "Image height should not be less than 300 px", "error");
//                 //     $scope.$digest();
//                 //     return;
//                 // } else {
//                 //     $scope.myagentslist[i].background = "background-image:url(" + this.src + ")";

//                 //     $scope.show_loader = 0;
//                 //     $scope.$digest();

//                 // }




//             };
//             image.onerror = function() {
//                 sweetAlert("Oops...", "Invalid file type: " + files[0].type, "error");
//                 $scope.show_loader = 0;
//                 $scope.$digest();
//             };
//         };
//     } else {
//         if (typeof files[0] == 'undefined') {
//             sweetAlert("Oops...", "No file selected", "error");
//         } else
//             sweetAlert("Oops...", "Invalid file type: " + files[0].type, "error");
//         $scope.show_loader = 0;
//         $scope.$digest();
//     }

// };
