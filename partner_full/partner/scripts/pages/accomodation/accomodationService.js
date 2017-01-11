/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function() {
    'use strict';

    angular.module('tripoAsiaApp')
        .service('accomodationService', accomodationService);

    /** @ngInject */
    function accomodationService($timeout, $ocLazyLoad,$httpParamSerializerJQLike, $http, configService, $rootScope, $location, $routeParams) {



         this.edit_hotels = function(callback){
          
           var params = {};

           params.id = $routeParams.accomodation_id;
           var data = $httpParamSerializerJQLike(params);

             $http.post(configService.getEnvConfig().serverURL + 'accomodation/show', data)
                .success(
                    function(data, status, headers, config) {
                        if (data.status == 1) {
                            var result = {};
                            console.log(data);
                            result=data;
                            // result.list = data.list.docs;
                            // result.pages = data.list.pages;
                            // result.page = data.list.page;
                            // result.limit = data.list.limit;
                            // result.total = data.list.total;
                            //console.log(result);
                             callback(result);
                        } else {
                            callback(data.status);
                        }
                    }).error(
                    function(data, status, header, config) {
                        callback(0);
                    });
       

         }


        /*List services of accomodation*/
        this.list = function(pageinfo, callback) {
            var data = $.param({
                category_type: $routeParams.category,
                pageId: pageinfo.currentPage,
                limit: pageinfo.currentLimit,
                auth_token: localStorage.getItem('user_auth_token')
            });
            $http.post(configService.getEnvConfig().serverURL + 'accomodation/partner_type_user/list', data)
                .success(
                    function(data, status, headers, config) {
                        if (data.status == 1) {
                            var result = {};
                            result.list = data.list.docs;
                            result.pages = data.list.pages;
                            result.page = data.list.page;
                            result.limit = data.list.limit;
                            result.total = data.list.total;
                            //console.log(result);
                            callback(result);
                        } else {
                            callback(data.status);
                        }
                    }).error(
                    function(data, status, header, config) {
                        callback(0);
                    });
        }

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



    }
})();
