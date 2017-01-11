/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    'use strict';

    angular.module('tripoAsiaApp.pages.transaction')
            .service('TransactionService', TransactionService);

    /** @ngInject */
    function TransactionService(shttp) {
        this.getTransList = function () {
            return shttp.post('get_transaction_all', {view_type: 'L'})
                    .then(function (response) {
                        console.log("Transaction", response);
                        if (response.data.status == 1) {
                            return response.data.data;
                        } else {
                            return [];
                        }
                    });
        };
        this.precessTransaction = function (list) {
            var Rlist = [];
            for (var i = 0; i < list.length; i++) {
                var obj = list[i];
                console.log("PROCESS_OBJECT", obj);
                console.log("REFFERENCE ID", obj.ref_id);
                var main_ob = {
                    transaction_type: obj.transaction_type,
                    refference_id: obj.ref_id,
                    status: obj.status,
                    id: obj._id
                };
                switch (obj.transaction_type) {
                    case 'Registration' :
                        if (obj.register.transaction_id) {
                            main_ob.transaction_id = obj.register.transaction_id ? obj.register.transaction_id : 'N/A';
                        }
                        if (obj.register) {
                            main_ob.cash_credited = obj.register.total_cash_credited_to_tripoasia ? obj.register.total_cash_credited_to_tripoasia : 0;
                        }
                        if (obj.register) {
                            main_ob.cash_debitted = obj.register.total_cash_debited_from_user ? obj.register.total_cash_debited_from_user : 0;
                        }
                        if (obj.register) {
                            main_ob.tc_credited = obj.register.total_tripocredit_credited_to_user ? obj.register.total_tripocredit_credited_to_user : 0;
                        }
                        if (obj.register) {
                            main_ob.tc_debited = obj.register.total_tripocredit_debited_from_tripoasia ? obj.register.total_tripocredit_debited_from_tripoasia : 0;
                        }
                        if (obj.register) {
                            main_ob.date = obj.register.exact_transaction_time_date ? obj.register.exact_transaction_time_date : "N/A";
                        }
                        break;
                    case 'Membership Upgrade' :
                        if (obj.membership_upgrade.transaction_id) {
                            main_ob.transaction_id = obj.membership_upgrade.transaction_id ? obj.membership_upgrade.transaction_id : 'N/A';
                        }
                        if (obj.membership_upgrade) {
                            main_ob.cash_credited = obj.membership_upgrade.total_cash_credited_to_tripoasia ? obj.membership_upgrade.total_cash_credited_to_tripoasia : 0;
                        }
                        if (obj.membership_upgrade) {
                            main_ob.cash_debitted = obj.membership_upgrade.total_cash_debited_from_user ? obj.membership_upgrade.total_cash_debited_from_user : 0;
                        }
                        if (obj.membership_upgrade) {
                            main_ob.tc_credited = obj.membership_upgrade.total_tripocredit_credited_to_user ? obj.membership_upgrade.total_tripocredit_credited_to_user : 0;
                        }
                        if (obj.membership_upgrade) {
                            main_ob.tc_debited = obj.membership_upgrade.total_tripocredit_debited_from_tripoasia ? obj.membership_upgrade.total_tripocredit_debited_from_tripoasia : 0;
                        }
                        if (obj.membership_upgrade) {
                            main_ob.date = obj.membership_upgrade.exact_transaction_time_date ? obj.membership_upgrade.exact_transaction_time_date : "N/A";
                        }
                        break;
                    case 'Tripocredit Topup' :
                        if (obj.top_up.transaction_id) {
                            main_ob.transaction_id = obj.membership_upgrade.transaction_id ? obj.membership_upgrade.transaction_id : 'N/A';
                        }
                        if (obj.top_up) {
                            main_ob.cash_credited = obj.membership_upgrade.total_cash_credited_to_tripoasia ? obj.membership_upgrade.total_cash_credited_to_tripoasia : 0;
                        }
                        if (obj.top_up) {
                            main_ob.cash_debitted = obj.membership_upgrade.total_cash_debited_from_user ? obj.membership_upgrade.total_cash_debited_from_user : 0;
                        }
                        if (obj.top_up) {
                            main_ob.tc_credited = obj.membership_upgrade.total_tripocredit_credited_to_user ? obj.membership_upgrade.total_tripocredit_credited_to_user : 0;
                        }
                        if (obj.top_up) {
                            main_ob.tc_debited = obj.membership_upgrade.total_tripocredit_debited_from_tripoasia ? obj.membership_upgrade.total_tripocredit_debited_from_tripoasia : 0;
                        }
                        if (obj.top_up) {
                            main_ob.date = obj.membership_upgrade.exact_transaction_time_date ? obj.membership_upgrade.exact_transaction_time_date : "N/A";
                        }
                        break;
                    case 'booking' :
                        if (obj.booking.cash) {
                            main_ob.transaction_id = obj.booking.cash.transaction_id ? obj.booking.cash.transaction_id : 'N/A';
                        }
                        if (obj.booking.cash) {
                            main_ob.cash_credited = obj.booking.cash.total_cash_credited_to_tripoasia ? obj.booking.cash.total_cash_credited_to_tripoasia : 0;
                        }
                        if (obj.booking.cash) {
                            main_ob.cash_debitted = obj.booking.cash.total_cash_debited_from_user ? obj.booking.cash.total_cash_debited_from_user : 0;
                        }
                        if (obj.booking.cash) {
                            main_ob.tc_credited = obj.booking.cash.total_tripocredit_credited_to_user ? obj.booking.cash.total_tripocredit_credited_to_user : 0;
                        }
                        if (obj.booking.cash) {
                            main_ob.tc_debited = obj.booking.cash.total_tripocredit_debited_from_tripoasia ? obj.booking.cash.total_tripocredit_debited_from_tripoasia : 0;
                        }
                        if (obj.booking.cash) {
                            main_ob.date = obj.booking.cash.exact_transaction_time_date ? obj.booking.cash.exact_transaction_time_date : 'N/A';
                        }
                        break;
                }

                main_ob.date = obj.modification_date_time;

                Rlist.push(main_ob);
                console.log("MAIN OB", main_ob);
            }

            return Rlist;
        };
    }
})();

