/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    'use strict';

    angular.module('tripoAsiaApp.pages.transaction')
            .controller('CntrlTrans', CntrlTrans)
            .controller('TransactionListCntrl', TransactionListCntrl)
            .controller('TransactionFullListCntrl', TransactionFullListCntrl)

    /** @ngInject */
    function CntrlTrans($scope, $rootScope, TransactionService, SweetAlert, $routeParams, shttp) {
        $scope.id = $routeParams.id;
        $scope.details_transaction = [];

        $scope.got_details = function () {


            shttp.admin_post('get_transaction_all', {
                "view_type": "D",
                "id": $scope.id
            })
                    .then(
                            function (data, status, headers, config) {
                                console.log("PSOTED22", data);
                                if (data.data.status != 0) {
                                    $scope.details_transaction = data.data.data;
                                    $scope.reference_id = $scope.details_transaction[0].ref_id;
                                    $scope.start_time = $scope.details_transaction[0].start_date_time_of_transaction;
                                    $scope.complete_time = $scope.details_transaction[0].modification_date_time;
                                    $scope.status = $scope.details_transaction[0].status_message;
                                    $scope.name = $scope.details_transaction[0].user_id.first_name + ' ' + $scope.details_transaction[0].user_id.last_name;
                                    $scope.addr = {};
                                    $scope.email = $scope.details_transaction[0].user_id.email;
                                    $scope.addr.add = $scope.details_transaction[0].user_id.address;
                                    $scope.addr.city = $scope.details_transaction[0].user_id.city;
                                    $scope.addr.country = $scope.details_transaction[0].user_id.country;
                                    $scope.addr.state = $scope.details_transaction[0].user_id.state;
                                    $scope.addr.zip = $scope.details_transaction[0].user_id.zip;
                                    $scope.addr.phone = $scope.details_transaction[0].user_id.phone;

                                    switch ($scope.details_transaction[0].transaction_type) {
                                        case 'Registration' :
                                            if ($scope.details_transaction[0].register) {
                                                // main_ob.transaction_id = obj.register.transaction_id ? obj.register.transaction_id : 'N/A';
                                                $scope.paypal_completion_time = $scope.details_transaction[0].register.exact_transaction_time_date ? $scope.details_transaction[0].register.exact_transaction_time_date : 'NA';

                                                $scope.total_amt_cash_dr = $scope.details_transaction[0].register.total_cash_debited_from_companyowner ? $scope.details_transaction[0].register.total_cash_debited_from_companyowner : 'NA';
                                                $scope.total_amt_cash_cr = $scope.details_transaction[0].register.total_cash_credited_to_companyowner;
                                                $scope.card_number = $scope.details_transaction[0].register.card_number ? $scope.details_transaction[0].register.card_number : "NA";
                                                $scope.total_amt_debited_user = $scope.details_transaction[0].register.total_cash_debited_from_user ? $scope.details_transaction[0].register.total_cash_debited_from_user : "NA";
                                                $scope.paypal_charge = $scope.details_transaction[0].register.paypal_handling_charge.percentage ? $scope.details_transaction[0].register.paypal_handling_charge.percentage : "NA";
                                                $scope.paypal_amt = $scope.details_transaction[0].register.paypal_handling_charge.amount ? $scope.details_transaction[0].register.paypal_handling_charge.amount : "NA";
                                                $scope.ledger_amt = ($scope.total_amt_debited_user) - ($scope.paypal_amt);
                                                $scope.tripoasia_deduc = $scope.details_transaction[0].register.tripoasia_deduction.amount ? $scope.details_transaction[0].register.tripoasia_deduction.amount : "NA";

                                                $scope.cr_tripoasia = $scope.details_transaction[0].register.total_cash_credited_to_tripoasia ? $scope.details_transaction[0].register.total_cash_credited_to_tripoasia : "NA";
                                            }


                                            break;
                                        case 'booking' :
                                            if ($scope.details_transaction[0].booking.cash) {
                                                // main_ob.transaction_id = obj.register.transaction_id ? obj.register.transaction_id : 'N/A';
                                                $scope.paypal_completion_time = $scope.details_transaction[0].booking.cash.exact_transaction_time_date ? $scope.details_transaction[0].booking.cash.exact_transaction_time_date : 'NA';
                                                $scope.total_amt_cash_dr = $scope.details_transaction[0].booking.cash.total_cash_debited_from_companyowner ? $scope.details_transaction[0].booking.cash.total_cash_debited_from_companyowner : 'NA';
                                                $scope.total_amt_cash_cr = $scope.details_transaction[0].booking.cash.total_cash_credited_to_companyowner;
                                                $scope.card_number = $scope.details_transaction[0].booking.cash.card_number ? $scope.details_transaction[0].booking.cash.card_number : "NA";
                                                $scope.total_amt_debited_user = $scope.details_transaction[0].booking.cash.total_cash_debited_from_user ? $scope.details_transaction[0].booking.cash.total_cash_debited_from_user : "NA";
                                                $scope.paypal_charge = $scope.details_transaction[0].booking.cash.paypal_handling_charge.percentage ? $scope.details_transaction[0].booking.cash.paypal_handling_charge.percentage : "NA";
                                                $scope.paypal_amt = $scope.details_transaction[0].booking.cash.paypal_handling_charge.amount ? $scope.details_transaction[0].booking.cash.paypal_handling_charge.amount : "NA";
                                                $scope.ledger_amt = ($scope.total_amt_debited_user) - ($scope.paypal_amt);
                                                $scope.tripoasia_deduc = $scope.details_transaction[0].booking.cash.tripoasia_deduction.amount ? $scope.details_transaction[0].booking.cash.tripoasia_deduction.amount : "NA";

                                                $scope.cr_tripoasia = $scope.details_transaction[0].booking.cash.total_cash_credited_to_tripoasia ? $scope.details_transaction[0].booking.cash.total_cash_credited_to_tripoasia : "NA";

                                                $scope.company = {};
                                                $scope.company.name = $scope.details_transaction[0].received_by.company_id.name;
                                                $scope.company.phone = $scope.details_transaction[0].received_by.company_id.contact_number;
                                                $scope.company.contact_person = $scope.details_transaction[0].received_by.company_id.contact_person;
                                                $scope.company.email = $scope.details_transaction[0].received_by.company_id.email;
                                                $scope.company.address = $scope.details_transaction[0].received_by.company_id.head_office_address;


                                            } else if ($scope.details_transaction[0].booking.tripocredit) {


                                                $scope.total_amt_cash_dr = $scope.details_transaction[0].booking.tripocredit.total_tripocredit_debited_from_tripoasia;
                                                $scope.total_amt_cash_cr = $scope.details_transaction[0].booking.tripocredit.total_tripocredit_credited_to_tripoasia;
                                                $scope.paypal_completion_time = $scope.details_transaction[0].booking.tripocredit.exact_transaction_time_date ? $scope.details_transaction[0].booking.tripocredit.exact_transaction_time_date : 'NA';
                                                $scope.card_number = $scope.details_transaction[0].booking.tripocredit.card_number ? $scope.details_transaction[0].booking.tripocredit.card_number : "NA";
                                                $scope.total_amt_debited_user = $scope.details_transaction[0].booking.tripocredit.total_cash_debited_from_user ? $scope.details_transaction[0].booking.tripocredit.total_cash_debited_from_user : "NA";
                                                $scope.paypal_charge = $scope.details_transaction[0].booking.tripocredit.paypal_handling_charge.percentage ? $scope.details_transaction[0].booking.tripocredit.paypal_handling_charge.percentage : "NA";
                                                $scope.paypal_amt = $scope.details_transaction[0].booking.tripocredit.paypal_handling_charge.amount ? $scope.details_transaction[0].booking.tripocredit.paypal_handling_charge.amount : "NA";
                                                $scope.ledger_amt = ($scope.total_amt_debited_user) - ($scope.paypal_amt);
                                                $scope.tripoasia_deduc = $scope.details_transaction[0].booking.tripocredit.tripoasia_deduction.amount ? $scope.details_transaction[0].booking.tripocredit.tripoasia_deduction.amount : "NA";

                                                $scope.cr_tripoasia = $scope.details_transaction[0].booking.tripocredit.total_cash_credited_to_tripoasia ? $scope.details_transaction[0].booking.tripocredit.total_cash_credited_to_tripoasia : "NA";

                                                $scope.company = {};
                                                $scope.company.name = $scope.details_transaction[0].received_by.company_id.name;
                                                $scope.company.phone = $scope.details_transaction[0].received_by.company_id.contact_number;
                                                $scope.company.contact_person = $scope.details_transaction[0].received_by.company_id.contact_person;
                                                $scope.company.email = $scope.details_transaction[0].received_by.company_id.email;
                                                $scope.company.address = $scope.details_transaction[0].received_by.company_id.head_office_address;

                                            } else {

                                                $scope.tripo_dr = 'NA';
                                                $scope.tripo_cr = 'NA';

                                            }

                                            break;

                                        case 'Membership Upgrade' :

                                            if ($scope.details_transaction[0].membership_upgrade) {
                                                // main_ob.transaction_id = obj.membership_upgrade.transaction_id ? obj.membership_upgrade.transaction_id : 'N/A';
                                                $scope.paypal_completion_time = $scope.details_transaction[0].membership_upgrade.exact_transaction_time_date ? $scope.details_transaction[0].membership_upgrade.exact_transaction_time_date : 'NA';

                                                $scope.total_amt_cash_dr = $scope.details_transaction[0].membership_upgrade.total_cash_debited_from_companyowner ? $scope.details_transaction[0].membership_upgrade.total_cash_debited_from_companyowner : 'NA';
                                                $scope.total_amt_cash_cr = $scope.details_transaction[0].membership_upgrade.total_cash_credited_to_companyowner;
                                                $scope.card_number = $scope.details_transaction[0].membership_upgrade.card_number ? $scope.details_transaction[0].membership_upgrade.card_number : "NA";
                                                $scope.total_amt_debited_user = $scope.details_transaction[0].membership_upgrade.total_cash_debited_from_user ? $scope.details_transaction[0].membership_upgrade.total_cash_debited_from_user : "NA";
                                                $scope.paypal_charge = $scope.details_transaction[0].membership_upgrade.paypal_handling_charge.percentage ? $scope.details_transaction[0].membership_upgrade.paypal_handling_charge.percentage : "NA";
                                                $scope.paypal_amt = $scope.details_transaction[0].membership_upgrade.paypal_handling_charge.amount ? $scope.details_transaction[0].membership_upgrade.paypal_handling_charge.amount : "NA";
                                                $scope.ledger_amt = ($scope.total_amt_debited_user) - ($scope.paypal_amt);
                                                $scope.tripoasia_deduc = $scope.details_transaction[0].membership_upgrade.tripoasia_deduction.amount ? $scope.details_transaction[0].membership_upgrade.tripoasia_deduction.amount : "NA";

                                                $scope.cr_tripoasia = $scope.details_transaction[0].membership_upgrade.total_cash_credited_to_tripoasia ? $scope.details_transaction[0].membership_upgrade.total_cash_credited_to_tripoasia : "NA";
                                            }


                                            break;


                                    }


                                }



                            },
                            function (data, status, header, config) {
                                console.log(data);

                                // to prevent interaction outside of dialog



                            });

        }


        $scope.got_details();
    }
    /** @ngInject */
    function TransactionListCntrl($scope, $rootScope, TransactionService, SweetAlert) {

    }
    /** @ngInject */
    function TransactionFullListCntrl($scope, $rootScope, TransactionService, SweetAlert, transactions) {
        $scope.translist = [];
        $scope.translist = TransactionService.precessTransaction(transactions);

        console.log("$scope.translist", $scope.translist);
    }
})();

