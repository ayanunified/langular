/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function () {
    'use strict';

    angular.module('tripoAsiaApp.pages.partner', ['SingularHttp'])
            .config(routeConfig)
            .run(function (shttp, $rootScope) {
                shttp.post('getUserInfo').then(function (response) {
                    console.log("RESPONSE USERINFO", response);
                    var company_id = response.data.data[0].company_id;
                    $rootScope.cowner = response.data.data[0].roles_id[0].roles_name == "Company Owner";
                    sessionStorage.setItem('company_id', company_id);
                });
            })

    /** @ngInject */
    function routeConfig($routeProvider, shttpProvider) {
        shttpProvider.beforeRequest(function (request) {
//            console.log('BEFORE QEQUEST', request);
            var rq = angular.copy(request);
            if (rq.data == '') {
                rq.data = {};
            }
            rq.data.auth_token = localStorage.getItem('user_auth_token');
            return rq;
        })
        var resolve = {
            accomodations: function (PartnerService) {
                return PartnerService.getAccomodations();
            },
            roles: function (PartnerService) {
                return PartnerService.getRoles();
            }
        };
        $routeProvider
                .when('/sub-user', {
                    templateUrl: 'scripts/pages/partner/partner.html',
                    controller: 'CntrlSubUser',
                    resolve: {
                        partners: function (PartnerService) {
                            return PartnerService.getPartnerList(1, 5).then(function (response) {
                                console.log('Partner List', response)
                                if (response.data.status) {
                                    return response.data.list;
                                } else {
                                    return {
                                        docs: []
                                    };
                                }
                            });
                        }
                    }
                })
                .when('/sub-user/create', {
                    templateUrl: 'scripts/pages/partner/partner-register.html',
                    controller: 'CntrlCreatePartner',
                    resolve: resolve
                })
                .when('/sub-user/edit/:id', {
                    templateUrl: 'scripts/pages/partner/partner-register.html',
                    controller: 'CntrlEditPartner',
                    resolve: angular.extend(resolve, {
                        partner: function (PartnerService, $route) {
                            console.log('$route', $route);
                            return PartnerService.getPartner($route.current.params.id);
                        }
                    })
                })
    }
})();