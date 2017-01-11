(function() {
    'use strict';

    angular.module('tripoAsiaApp')
        .service('pageTopService', pageTopService);

    /** @ngInject */
    function pageTopService($timeout, $ocLazyLoad, $http, configService, $rootScope, $location, $routeParams) {

        /*logout services of partner type user*/
        this.logout = function(callback) {
            var data = $.param({
                auth_token: localStorage.getItem("user_auth_token")
            });

            $http.post(configService.getEnvConfig().serverURL + 'logout', data)
                .success(
                    function(data, status, headers, config) {
                        callback(data.status);
                    }).error(
                    function(data, status, header, config) {
                        callback(data.status);
                    });
        }

        this.load_user = function(callback) {
            var name = 'default(error)';
            var data = $.param({
                auth_token: localStorage.getItem("user_auth_token")
            });

            $http.post(configService.getEnvConfig().serverURL + 'getUserInfo', data)
                .success(
                    function(data, status, headers, config) {
                        if (data.status == 1) {
                            name = data.data[0].first_name + " " + data.data[0].last_name;
                        }
                        callback(name);
                    }).error(
                    function(data, status, header, config) {
                        callback(name);
                    });
        }
    }
})();
