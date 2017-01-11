/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function() {
    'use strict';

    angular.module('tripoAsiaApp')
        .service('dashboardService', dashboardService);

    /** @ngInject */
    function dashboardService($timeout, $ocLazyLoad, $http, configService, $rootScope, $location, $routeParams) {

        this.getdetails = function(callback) {
            var data = $.param({
                auth_token: localStorage.getItem('user_auth_token')
            });
            $http.post(configService.getEnvConfig().serverURL + 'partner/category/count', data)
                .success(
                    function(data, status, headers, config) {
                        callback(data);
                    }).error(
                    function(data, status, header, config) {
                        callback(0);
                    });
        }



    }
})();
