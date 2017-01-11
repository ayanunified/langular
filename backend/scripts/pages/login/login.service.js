/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    'use strict';

    angular.module('myApp.pages.login')
            .service('LoginService', function (shttp) {
                this.adminlogin = function (email, password) {
                    return shttp.post('admin-login', {
                        email: email,
                        password: password,
                    });
                };
                
            });

})();

