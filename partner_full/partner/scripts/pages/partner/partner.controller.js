/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    'use strict';

    angular.module('tripoAsiaApp.pages.partner')
            .controller('CntrlSubUser', CntrlSubUser)
            .controller('CntrlEditPartner', CntrlEditPartner)
            .controller('CntrlCreatePartner', CntrlCreatePartner);

    /** @ngInject */
    function CntrlSubUser($scope, $rootScope, partners, PartnerService, SweetAlert) {
        $scope.pageinfo = {};
        $scope.pageinfo.currentPage = 1;
        $scope.pageinfo.currentLimit = 5;
        $rootScope.acc_type = 'SubUSer';
        $scope.accomodation_type = 'Partners';
        $scope.partners = partners;
        $scope.last_id = 1;
        $scope.partnerLoad = function () {
            PartnerService.getPartnerList($scope.pageinfo.currentPage, $scope.pageinfo.currentLimit).then(function (result) {
                var last_id = (result.data.list.page - 1) * (result.data.list.limit);
                if (last_id == 0) {
                    $scope.last_id = 1;
                } else {
                    $scope.last_id = last_id + 1;
                }
                $scope.accomodation = result.data.list;

            });
        };
        $scope.change_partner = function (id, status, index) {
//            alert(index);
            var sttext = status == 0 ? 'Deactivate' : 'Activate';
            SweetAlert.swal({
                title: "Are you sure?",
                text: "Do you wnat to " + sttext + " this partner!",
                type: "warning",
                showCancelButton: true,
                confirmButtonClass: "btn-danger",
                confirmButtonText: "Yes, " + sttext + " it!",
                closeOnConfirm: true
            }, function (res) {
//                console.log("res", res);
                if (res) {
                    PartnerService.change_status(id, status).then(function (response) {
//                        console.log("response of change status", response);
                        if (response.data.status == 1) {
                            $scope.partners.docs[index].status = status;
                            SweetAlert.swal("Updated!", response.data.msg, "success");
                        } else {
                            SweetAlert.swal("Error!", response.data.msg, "error");
                        }
                    });
                }

            });
        };

        console.log("$scope.partners", $scope.partners);
    }

    /** @ngInject */
    function CntrlEditPartner($scope, PartnerService, $rootScope, SweetAlert, accomodations, roles, $location, partner) {
        $scope.accomodations = accomodations;
        $scope.roles = roles;

        $rootScope.acc_type = 'SubUSer';
        $scope.accomodation_type = 'Partners';
        $scope.currentDate = new Date();
        $scope.edit = true;
        $scope.partner = {};

        $scope.partner = partner;
        $scope.partner.pemail = partner.paypal_email;
        $scope.partner.fname = partner.first_name;
        $scope.partner.lname = partner.last_name;
        $scope.partner.role_id = partner.roles_id[0];
        $scope.partner.id = partner._id;
        $scope.go_list = function () {
            $location.path('sub-user');
        };
        $scope.create_partner = function () {
            var j = $scope.partner.accomodation_id;
            $scope.partner.company_id = sessionStorage.getItem('company_id');
            var partner = angular.copy($scope.partner);
            partner.accomodation_id = j.join(',');
            PartnerService.editPartner(partner).then(function (response) {
                console.log("Edit partner success", response);
                if (response.data.status == 1) {
                    $scope.partnarFrom.$setPristine();
                    $scope.partnarFrom.$setUntouched();
                    $scope.partnarFrom.reset();
                    $scope.partner = {};
                    SweetAlert.swal("Updated!", response.data.msg, "success");
                    $location.path('sub-user');
                } else {
                    SweetAlert.swal("Error!", response.data.msg, "error");
                }
            });
        };

    }
    /** @ngInject */
    function CntrlCreatePartner($scope, PartnerService, $rootScope, SweetAlert, accomodations, roles, $location) {
        $scope.accomodations = accomodations;
        $scope.roles = roles;

        $rootScope.acc_type = 'SubUSer';
        $scope.accomodation_type = 'Partners';
        $scope.currentDate = new Date();
        $scope.partner = {};
        console.log("$scope.accomodations", $scope.accomodations);
        console.log("$scope.roles", $scope.roles);

        $scope.go_list = function () {
            $location.path('sub-user');
        };

        $scope.create_partner = function () {
            var j = $scope.partner.accomodation_id;
            $scope.partner.company_id = sessionStorage.getItem('company_id');
            var partner = angular.copy($scope.partner);
            partner.accomodation_id = j.join(',');
            PartnerService.createPartner(partner).then(function (response) {
                console.log("Register partner success", response);
                if (response.data.status == 1) {
                    $scope.partnarFrom.$setPristine();
                    $scope.partnarFrom.$setUntouched();
                    $scope.partnarFrom.reset();
                    $scope.partner = {};
                    SweetAlert.swal("Registered!", response.data.msg, "success");
                    $location.path('sub-user');
                } else {
                    SweetAlert.swal("Error!", response.data.msg, "error");
                }
            });
        };
    }

})();