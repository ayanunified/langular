/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function() {
    'use strict';

    angular.module('tripoAsiaApp.pages.accomodation', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($routeProvider) {
        $routeProvider.when('/accomodation/:category', {
            templateUrl: 'scripts/pages/accomodation/accomodation.html',
            controller: 'AccomodationPageCtrl',
            resolve: {
                factory_login_check: checkisLogin
            }
        });
        $routeProvider.when('/accomodation_dashboard/:category/:accomodation_id', {
            templateUrl: 'scripts/pages/accomodation/accomodationWisePartnerDashboard.html',
            controller: 'AccomodationPageCtrl',
            resolve: {
                factory_login_check: checkisLogin
            }
        });


        $routeProvider.when('/accomodation_edit/:category/:accomodation_id', {
            templateUrl: 'scripts/pages/accomodation/edit-accomodation.html',
            controller: 'EditAccomodationPageCtrl',
            resolve: {
                factory_login_check: checkisLogin
            }
        });
        /*room features routes*/
        $routeProvider.when('/roomfeature/:category/:accomodation_id', {
            templateUrl: 'scripts/pages/accomodation/room_feature/roomfeature.html',
            controller: 'RoomfeaturePageCtrl',
            resolve: {
                factory_login_check: checkisLogin
            }
        });
        $routeProvider.when('/addroomfeature/:category/:accomodation_id', {
            templateUrl: 'scripts/pages/accomodation/room_feature/addroomfeature.html',
            controller: 'RoomfeaturePageCtrl',
            resolve: {
                factory_login_check: checkisLogin
            }
        });
        $routeProvider.when('/editroomfeature/:category/:accomodation_id/:room_features_id', {
            templateUrl: 'scripts/pages/accomodation/room_feature/editroomfeature.html',
            controller: 'RoomfeaturePageCtrl',
            resolve: {
                factory_login_check: checkisLogin
            }
        });
        /*room types routes*/
        $routeProvider.when('/roomtypes/:category/:accomodation_id', {
            templateUrl: 'scripts/pages/accomodation/room_types/roomtype.html',
            controller: 'RoomtypePageCtrl',
            resolve: {
                factory_login_check: checkisLogin
            }
        });
        $routeProvider.when('/addroomtypes/:category/:accomodation_id', {
            templateUrl: 'scripts/pages/accomodation/room_types/addroomType.html',
            controller: 'RoomtypePageCtrl',
            resolve: {
                factory_login_check: checkisLogin
            }
        });
        $routeProvider.when('/editroomtypes/:category/:accomodation_id/:room_types_id', {
            templateUrl: 'scripts/pages/accomodation/room_types/editroomType.html',
            controller: 'RoomtypePageCtrl',
            resolve: {
                factory_login_check: checkisLogin
            }
        });
        /*room routes*/
        $routeProvider.when('/rooms/:category/:accomodation_id/:room_types_id', {
            templateUrl: 'scripts/pages/accomodation/room/room.html',
            controller: 'RoomPageCtrl',
            resolve: {
                factory_login_check: checkisLogin
            }
        });

        /*addon routes*/

        $routeProvider.when('/Addonlist/:accomodation_id', {
            templateUrl: 'scripts/pages/accomodation/Addons/addonlist.html',
            controller: 'addonlistCtrl',
            resolve: {
                factory_login_check: checkisLogin
            }
        });

     $routeProvider.when('/AddonlistInsert/:accomodation_id', {
            templateUrl: 'scripts/pages/accomodation/Addons/Insert_addon.html',
            controller: 'insertlistCtrl',
            resolve: {
                factory_login_check: checkisLogin
            }
        });

    }
})();
