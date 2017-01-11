angular.module('app.config', []).constant('env', 'development_admin')
    .value('config', {

        development_admin: {
            frontApiURL: window.location.origin, // Set your angular base path here for front End
            backApiURL: window.location.origin, // Set your angular base path here for admin end
            partnerApiURL: window.location.origin, // Set your angular base path here for partner end
            siteurl: '',
            mobileWeburl: '',
            serverURL: window.location.origin + "/makingadminpanel/server/api/", // this is the api base url
            imageURL: window.location.origin
        }
    });
