/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function() {
    'use strict';

    angular.module('tripoAsiaApp')
        .service('roomtypeService', roomtypeService);

    /** @ngInject */
    function roomtypeService($timeout, $ocLazyLoad, $http, configService, $rootScope, $location, $routeParams) {

        this.checkUser = function(callback) {
            var data = $.param({
                category_type: $routeParams.category,
                accomodation_id: $routeParams.accomodation_id,
                auth_token: localStorage.getItem('user_auth_token')
            });
            $http.post(configService.getEnvConfig().serverURL + 'accomodation/checkuser', data)
                .success(
                    function(data, status, headers, config) {
                        callback(data.status);
                    }).error(
                    function(data, status, header, config) {
                        callback(0);
                    });
        }

        this.roomtypelist = function(callback) {
            var data = $.param({
                accomodation_id: $routeParams.accomodation_id
            });
            $http.post(configService.getEnvConfig().serverURL + 'roomtype/show', data)
                .success(
                    function(data, status, headers, config) {
                        if (data.status == 0) {
                            callback(data.status);
                        } else {
                            var room_type_list = temporaryRoomType(data.room_type_list);
                            //console.log(room_type_list);
                            callback(room_type_list);
                        }
                    }).error(
                    function(data, status, header, config) {
                        callback(0);
                    });
        }

        function temporaryRoomType(room_type_list) {
            //console.log(room_type_list);
            for (var i in room_type_list) {
                if (room_type_list[i].images.length != 0) {
                    for (var j in room_type_list[i].images) {
                        var temp_path = room_type_list[i].images[j].path;
                        if (room_type_list[i].images[j].is_default == 1) {
                            var thumb_image = temp_path;
                            var index = thumb_image.indexOf('.');
                            var value = "-100x100";
                            var thumbnail_path = thumb_image.substr(0, index) + value + thumb_image.substr(index);
                            room_type_list[i].image_to_show = configService.getEnvConfig().imageURL + 'room/thumbnails/' + thumbnail_path;
                        }
                        temp_path = configService.getEnvConfig().imageURL + 'room/' + temp_path;
                        room_type_list[i].images[j].path = temp_path;

                    }
                } else {
                    room_type_list[i].image_to_show = 'images/file-image2.jpg';
                }
            }
            return room_type_list;
        }

        this.roomtypeInsert = function(room_type, callback) {
            var data = new FormData();
            var features = [];
            var addons = [];
            //console.log(room_type.featuresCheckbox[31]);
            var myObject = room_type.featuresCheckbox;
            for (var key in myObject) {
                if (myObject[key] == true) {
                    features.push(key);
                }
            }
            //console.log('features', features);
            var addon_arr = room_type.addonCheckbox;
            for (var key in addon_arr) {
                if (addon_arr[key] == true) {
                    addons.push(key);
                }
            }

            data.append('name', room_type.name);
            data.append('tripocredit', room_type.tripocredit);
            data.append('cash', room_type.cash);
            data.append('both', JSON.stringify(room_type.both));
            data.append('max', room_type.max);
            data.append('beds', room_type.beds);
            data.append('baths', room_type.baths);
            data.append('hbaths', room_type.hbaths);
            data.append('features', features);
            data.append('add_on', addons);
            data.append('accomodation_id', $routeParams.accomodation_id);

            for (var i in room_type.addroomtype) {
                data.append('images', room_type.addroomtype[i]);
            }
            data.append('default', room_type.default_image);
            $http.post(configService.getEnvConfig().serverURL + 'roomtype/insert', data, {
                    headers: { 'Content-Type': undefined },
                    transformRequest: angular.identity
                })
                .success(
                    function(data, status, headers, config) {
                        console.log(data);
                        callback(data.status);
                    }).error(
                    function(data, status, header, config) {
                        callback(0);
                    });
        }

        this.roomtypeEdit = function(room_type, callback) {
            //console.log($routeParams.room_types_id);

            var data = new FormData();
            var features = [];
            var addons = [];
            var myObject = room_type.featuresCheckbox;
            var room_type_img = room_type.addroomtype;
            var img_pos = [];

            for (var key in myObject) {
                if (myObject[key] == true) {
                    features.push(key);
                }
            }
            var addon_arr = room_type.addonCheckbox;
            for (var key in addon_arr) {
                if (addon_arr[key] == true) {
                    addons.push(key);
                }
            }

            if (room_type_img != undefined) {
                for (var i in room_type.addroomtype) {
                    data.append('images', room_type.addroomtype[i]);
                    img_pos.push(i);
                }
                data.append('image_postions', img_pos);
            }
            data.append('accomodation_id', $routeParams.accomodation_id);
            data.append('name', room_type.name);
            data.append('tripocredit', room_type.tripocredit);
            data.append('cash', room_type.cash);
            data.append('both', JSON.stringify(room_type.both));
            data.append('max', JSON.stringify(room_type.max));
            data.append('beds', room_type.beds);
            data.append('baths', room_type.baths);
            data.append('hbaths', room_type.hbaths);
            data.append('features', features);
            // data.append('accomodation_id', $routeParams.accomodation_id);
            data.append('default', room_type.default_image);
            data.append('add_on', addons);
            data.append('room_type_id', $routeParams.room_types_id);

            $http.post(configService.getEnvConfig().serverURL + 'roomtype/update', data, {
                    headers: { 'Content-Type': undefined },
                    transformRequest: angular.identity
                })
                .success(
                    function(data, status, headers, config) {
                        //console.log(data);
                        callback(data.status);
                    }).error(
                    function(data, status, header, config) {
                        callback(0);
                    });
        }

        this.roomtypeRow = function(callback) {
            var data = $.param({
                accomodation_id: $routeParams.accomodation_id,
                room_type_id: $routeParams.room_types_id
            });
            $http.post(configService.getEnvConfig().serverURL + 'roomtype/showone', data)
                .success(
                    function(data, status, headers, config) {
                        if (data.status == 0) {
                            callback(0);
                        } else {
                            var temp_data = {};
                            temp_data.data = data.data;
                            temp_data.data[0].feature = data.sub_data;
                            var data = temporaryRoomType(temp_data.data);
                            callback(data);
                        }
                    }).error(
                    function(data, status, header, config) {
                        callback(0);
                    });
        }


        this.makeFeature = function(id, callback) {
            var data = $.param({
                room_type_id: id,
                accomodation_id: $routeParams.accomodation_id
            });
            $http.post(configService.getEnvConfig().serverURL + 'roomtype/makefeature', data)
                .success(
                    function(data, status, headers, config) {
                        callback(data.status);
                    }).error(
                    function(data, status, header, config) {
                        callback(0);
                    });
        }



        this.roomTypeDelete = function(id, callback) {
            var data = $.param({
                room_type_id: id
            });
            $http.post(configService.getEnvConfig().serverURL + 'roomtype/delete', data)
                .success(
                    function(data, status, headers, config) {
                        //console.log(data);
                        if (data.status != 0) {
                            callback(1);
                        } else {
                            callback(0);
                        }
                    }).error(
                    function(data, status, header, config) {
                        callback(0);
                    });
        }

    }
})();
