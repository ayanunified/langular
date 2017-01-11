/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    'use strict';

    angular.module('tripoAsiaApp.pages.partner')
            .service('PartnerService', function (shttp) {
                this.getPartnerList = function (pageId, limit) {
                    return shttp.post('getCompanyPartners', {
                        pageId: pageId,
                        limit: limit,
                        company_id: sessionStorage.getItem('company_id')
                    });
                };
                this.createPartner = function (partner) {
                    partner.company_id = sessionStorage.getItem('company_id');
                    return shttp.post('createUserAsPartner', partner);
                };
                this.editPartner = function (partner) {
                    partner.company_id = sessionStorage.getItem('company_id');
                    return shttp.post('userProfileUpdate', partner);
                };
                this.getAccomodations = function () {
                    return shttp.post('accomodation/getaccomodationfromcompany', {
                        company_id: sessionStorage.getItem('company_id')
                    }).then(function (response) {
                        if (response.data.status == 1) {
                            return response.data.list;
                        } else {
                            return [];
                        }
                    });
                };
                this.getRoles = function () {
                    return shttp.post('roles/partnerrolesShow', {
                        company_id: sessionStorage.getItem('company_id')
                    }).then(function (response) {
                        if (response.data.status == 1) {
                            return response.data.list;
                        } else {
                            return [];
                        }
                    });
                };
                this.getPartner = function (id) {
                    return shttp.post('fetchSinglePartners', {
                        id: id
                    }).then(function (response) {
                        console.log("RESPONSE", response);
                        if (response.data.status == 1) {
                            return response.data.list[0];
                        } else {
                            return {};
                        }
                    });
                };
                this.change_status = function (id, status) {
                    return shttp.post('userStatusChange', {
                        id: id,
                        status: status
                    });
                };
            });

})();

