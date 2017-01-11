/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function () {
    'use strict';
    angular.module('tripoAsiaApp.pages.transaction', ['SingularHttp'])
            .config(routeConfig)
            .run(function (shttp) {
            })
    /** @ngInject */
    function routeConfig($routeProvider, shttpProvider) {
        $routeProvider
                .when('/transaction', {
                    templateUrl: 'scripts/pages/transaction/trans.fulllist.html',
                    controller: 'TransactionFullListCntrl',
                    resolve: {
                        transactions: function (TransactionService) {
                            return TransactionService.getTransList();
                        }
                    }
                })
                .when('/transaction/:id', {
                    templateUrl: 'scripts/pages/transaction/trans.details.html',
                    controller: 'CntrlTrans',
//                    resolve: {
//                        transaction: function (shttp, $route) {
//                            return shttp.post('get_transaction_all', {view_type: 'D', id: $route.current.params.id})
//                                    .then(function (response) {
//                                        console.log("Transaction Details", response);
//                                        if (response.data.status == 1) {
//                                            return response.data.data[0];
//                                        } else {
//                                            return {};
//                                        }
//                                    });
//                        }
//                    }
                })

    }

})();
