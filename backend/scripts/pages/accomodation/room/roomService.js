/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function() {
    'use strict';

    angular.module('tripoAsiaApp')
        .service('roomService', roomService);

    /** @ngInject */
    function roomService($timeout, $ocLazyLoad, $http, configService, $rootScope, $location, $routeParams) {

        this.checkUser = function(callback) {
            var data = $.param({
                category_type: $routeParams.category,
                accomodation_id: $routeParams.accomodation_id,
                room_type_id: $routeParams.room_types_id,
                auth_token: localStorage.getItem('user_auth_token')
            });
            $http.post(configService.getEnvConfig().serverURL + 'accomodation/room/checkuser', data)
                .success(
                    function(data, status, headers, config) {
                        callback(data.status);
                    }).error(
                    function(data, status, header, config) {
                        callback(0);
                    });
        }

        this.roomInsert = function(room, callback) {
            var data = $.param({
                accomodation_id: $routeParams.accomodation_id,
                room_type_id: $routeParams.room_types_id,
                room_no: room.room_no,
                price_type: room.price_type
            });
            $http.post(configService.getEnvConfig().serverURL + 'accomodation/roomtype/room/insert', data)
                .success(
                    function(data, status, headers, config) {
                        callback(data.status);
                    }).error(
                    function(data, status, header, config) {
                        callback(404);
                    });
        }

        this.rooms_list = function(callback) {
            var data = $.param({
                room_type_id: $routeParams.room_types_id
            });
            $http.post(configService.getEnvConfig().serverURL + 'room/list_show', data)
                .success(
                    function(data, status, headers, config) {
                        callback(data);
                    }).error(
                    function(data, status, header, config) {
                        callback(404);
                    });
        }

        this.roomEdit = function(id, room, callback) {
            var data = $.param({
                room_id: id,
                room_no: room.room_no,
                price_type: room.price_type,
                accomodation_id: $routeParams.accomodation_id
            });
            $http.post(configService.getEnvConfig().serverURL + 'accomodation/roomtype/room/edit', data)
                .success(
                    function(data, status, headers, config) {
                        callback(data.status);
                    }).error(
                    function(data, status, header, config) {
                        callback(404);
                    });
        }

        this.roomDelete = function(id, callback) {
            var data = $.param({
                room_id: id,
                room_type_id: $routeParams.room_types_id
            });
            $http.post(configService.getEnvConfig().serverURL + 'accomodation/roomtype/room/delete', data)
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
                        callback(404);
                    });
        }

    }
})();
