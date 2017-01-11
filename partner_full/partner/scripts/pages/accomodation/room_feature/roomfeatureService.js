/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function() {
    'use strict';

    angular.module('tripoAsiaApp')
        .service('roomfeatureService', roomfeatureService);

    /** @ngInject */
    function roomfeatureService($timeout, $ocLazyLoad, $http, configService, $rootScope, $location, $routeParams) {

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

        this.roomfeaturelist = function(callback) {
            var data = $.param({
                accomodation_id: $routeParams.accomodation_id
            });
            $http.post(configService.getEnvConfig().serverURL + 'roomfeature/show', data)
                .success(
                    function(data, status, headers, config) {
                        console.log(data);
                        if (data.status == 0) {
                            callback(data.status);
                        } else {
                            callback(data.room_feature_list,data.addon_list);
                        }
                    }).error(
                    function(data, status, header, config) {
                        callback(0);
                    });
        }

        this.roomfeatureInsert = function(room_feature, callback) {
            var data = new FormData();
            data.append('accomodation_id', $routeParams.accomodation_id);
            data.append('name', room_feature.name);
            data.append('icon', room_feature.icon);
            //console.log(room_feature.icon);
            $http.post(configService.getEnvConfig().serverURL + 'roomfeature/insert', data, {
                    headers: { 'Content-Type': undefined },
                    transformRequest: angular.identity
                })
                .success(
                    function(data, status, headers, config) {
                        callback(data.status);
                    }).error(
                    function(data, status, header, config) {
                        callback(0);
                    });
        }



        this.roomfeatureRow = function(callback) {
            var data = $.param({
                accomodation_id: $routeParams.accomodation_id,
                room_features_id: $routeParams.room_features_id
            });
            $http.post(configService.getEnvConfig().serverURL + 'roomfeature/show', data)
                .success(
                    function(data, status, headers, config) {
                        console.log(data);
                        if (data.status == 0) {
                            callback(0);
                        } else {
                            if (data.room_feature_list[0].icon == undefined) {
                                var image_path = 'images/file-image2.jpg';
                            } else {
                                var image_path = configService.getEnvConfig().imageURL + 'room/' + data.room_feature_list[0].icon;
                            }
                            data.room_feature_list[0].icon = image_path;
                            callback(data.room_feature_list);
                        }
                    }).error(
                    function(data, status, header, config) {
                        callback(0);
                    });
        }

        this.roomfeatureEdit = function(room_feature, callback) {
            var data = new FormData();
            data.append('accomodation_id', $routeParams.accomodation_id);
            data.append('room_feature_id', $routeParams.room_features_id);
            data.append('name', room_feature.name);
            data.append('icon', room_feature.icon);
            console.log(room_feature.icon);
            $http.post(configService.getEnvConfig().serverURL + 'roomfeature/edit', data, {
                    headers: { 'Content-Type': undefined },
                    transformRequest: angular.identity
                })
                .success(
                    function(data, status, headers, config) {
                        callback(data.status);
                    }).error(
                    function(data, status, header, config) {
                        callback(0);
                    });
        }

        this.roomfeatureDelete = function(id, callback) {
            var data = $.param({
                room_features_id: id
            });
            $http.post(configService.getEnvConfig().serverURL + 'roomfeature/delete', data)
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
