(function() {
    'use strict';
    angular.module('tripoAsiaApp.pages.accomodation')
        .controller('EditAccomodationPageCtrl', EditAccomodationPageCtrl);
    /** @ngInject */
    function EditAccomodationPageCtrl($scope, $timeout, $httpParamSerializerJQLike, $ocLazyLoad, $http, configService, $rootScope, $location, $routeParams, accomodationService, SweetAlert) {
        $scope.error_msg = 0;
        $scope.accomodation_insert_obj = {};
        $scope.accomodation_insert_objj = {};
        $scope.file_upload_error = {};
        $scope.file_upload_error.error = "";
        $scope.category = $routeParams.category;
        $rootScope.acc_type = $routeParams.category;
        //$scope.accomodation.category = $routeParams.category;
        $scope.accomodation_id = $routeParams.accomodation_id;
        $scope.imagefilesize_valid = 1;
        $scope.accomodation_insert_obj.image = 'images/file-image.png';
        $scope.setimagefilesize_valid = function(v, val) {
            $scope.imagefilesize_valid = v;
            $scope.image_man = 0;
            if (v == 0) {
                setTimeout(function() {
                    $('#images').remove();
                    $('.file_style').html("<img id='images'>");
                }, 1000);
                $scope.accomodation_insert_obj.image = '';
            }
        };
        $scope.init = function() {
            accomodationService.edit_hotels(function(result) {
                console.log("PROMISE", result.list.name);
                $scope.accomodation_insert_objj = result.list;
                $scope.accomodation_insert_obj.name = result.list.name;
                $scope.accomodation_insert_obj.category = result.list.category;
                $scope.accomodation_insert_obj.company_id = result.list.company_id;
                $scope.accomodation_insert_obj.file = "";
                if ($scope.accomodation_insert_obj.image) {
                    $scope.accomodation_insert_obj.image = configService.getEnvConfig().imageURL + '/images/' + result.list.image;
                }
                $scope.accomodation_insert_obj.exact_location = result.list.exact_location;
                $scope.accomodation_insert_obj.lat = result.list.lat;
                $scope.accomodation_insert_obj.long = result.list.long;
                console.log("PROMISE", $scope.accomodation_insert_obj.name);
                initialize();

            });
        }

        $scope.init();
        $scope.save_accomodation = function() {
                console.log($scope.accomodation_insert_obj.file);

                if ($scope.imagefilesize_valid) {

                    var posted_data = {};
                    posted_data = $scope.accomodation_insert_obj;
                    posted_data._id = $routeParams.accomodation_id;

                    var fd = new FormData();
                    fd.append('id', posted_data._id);
                    fd.append('category', posted_data.category);
                    fd.append('company_id', posted_data.company_id);
                    fd.append('name', posted_data.name);
                    fd.append('exact_location', posted_data.exact_location);
                    fd.append('lat', posted_data.lat);
                    fd.append('long', posted_data.long);
                    fd.append('image', posted_data.file);
                    var config = {
                        headers: { 'Content-Type': undefined },
                        transformRequest: angular.identity
                    }
                    $http.post(configService.getEnvConfig().serverURL + 'accomodation/update', fd, config)
                        .success(
                            function(data, status, headers, config) {
                                if (data.status == 202) {
                                    $scope.error_msg = 1;
                                } else if (data.status == 1) {
                                    $scope.error_msg = 0;
                                    SweetAlert.swal("Successful!", "Accomodation updated Succesfully.", "success");
                                    $scope.init();
                                } else {
                                    $scope.error_msg = 0;
                                    SweetAlert.swal("Error", "cannot update.", "error");
                                }

                            }).error(
                            function(data, status, header, config) {
                                console.log(status);
                            });
                }
            }
            //////////////////////////MAP FUNCTION//////////////////////////////////////////////////////////
        var map;

        function initialize() {
            var myLatlng;

            if ($scope.accomodation_insert_obj.lat && $scope.accomodation_insert_obj.long) {
                myLatlng = new google.maps.LatLng($scope.accomodation_insert_obj.lat, $scope.accomodation_insert_obj.long);
            } else {
                myLatlng = new google.maps.LatLng(40.73776640000001, -73.9896235);
            }

            var myOptions = {
                zoom: 14,
                center: myLatlng,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
            var marker = new google.maps.Marker({
                draggable: true,
                //anchorPoint: new google.maps.Point(0, -29),
                position: myLatlng,
                map: map,
                title: "Your location"
            });
            // console.log("location field " + document.getElementById('exact_location'));
            var autocomplete = new google.maps.places.Autocomplete(document.getElementById('exact_location'));
            autocomplete.bindTo('bounds', map);
            var infowindow = new google.maps.InfoWindow();
            autocomplete.addListener('place_changed', function() {
                infowindow.close();
                marker.setVisible(false);
                var place = autocomplete.getPlace();
                // console.log(place);
                if (!place.geometry) {
                    window.alert("Autocomplete's returned place contains no geometry");
                    return;
                }
                // If the place has a geometry, then present it on a map.
                if (place.geometry.viewport) {
                    map.fitBounds(place.geometry.viewport);
                } else {
                    map.setCenter(place.geometry.location);
                    map.setZoom(17); // Why 17? Because it looks good.
                }
                marker.setIcon( /** @type {google.maps.Icon} */ ({
                    url: place.icon,
                    size: new google.maps.Size(71, 71),
                    origin: new google.maps.Point(0, 0),
                    anchor: new google.maps.Point(17, 34),
                    scaledSize: new google.maps.Size(35, 35)
                }));
                marker.setPosition(place.geometry.location);
                //  alert(place.geometry.location);
                var latitude = place.geometry.location.lat();
                var longitude = place.geometry.location.lng();
                marker.setVisible(true);
                var address = '';
                if (place.address_components) {
                    address = [
                        (place.address_components[0] && place.address_components[0].short_name || ''),
                        (place.address_components[1] && place.address_components[1].short_name || ''),
                        (place.address_components[2] && place.address_components[2].short_name || '')
                    ].join(' ');
                }
                infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + address);
                $scope.accomodation_insert_obj.lat = latitude;
                $scope.accomodation_insert_obj.long = longitude;
                $scope.accomodation_insert_obj.exact_location = place.formatted_address;
                $scope.$digest();
                infowindow.open(map, marker);
            });
            google.maps.event.addListener(marker, 'dragend', function(event) {
                // document.getElementById("lat").value = event.latLng.lat();
                // document.getElementById("long").value = event.latLng.lng();
                //  var lat = parseFloat(document.getElementById("lat").value);
                // var lng = parseFloat(document.getElementById("long").value);
                // var latlng = new google.maps.LatLng(lat, lng);
                // var geocoder = geocoder = new google.maps.Geocoder();
                new google.maps.Geocoder().geocode({
                    'latLng': new google.maps.LatLng(event.latLng.lat(), event.latLng.lng())
                }, function(results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                        if (results[1]) {
                            //console.log(results);
                            $scope.accomodation_insert_obj.exact_location = results[1].formatted_address;
                            $scope.accomodation_insert_obj.lat = event.latLng.lat();
                            $scope.accomodation_insert_obj.long = event.latLng.lng();
                            $scope.$digest();
                            // document.getElementById("exact_location").value = results[1].formatted_address;
                            //localStorage.setItem("F_address", results[1].formatted_address);
                            // angular.element(document.getElementById("exact_location")).scope().accomodation_insert_obj.exact_location = results[1].formatted_address;
                            // angular.element(document.querySelector('#exact_location')).scope().accomodation_insert_obj.exact_location = results[1].formatted_address;
                        }
                    }
                });
            });
        }

        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    }
})();
