angular.module('app.config', []).constant('env', 'development_admin')
    .value('config', {

        development_admin: {
            frontApiURL: window.location.origin + '/tripoasia/master/beta', // Set your angular base path here for front End
            backApiURL: window.location.origin + '/tripoasia/master/beta/admin', // Set your angular base path here for admin end
            partnerApiURL: window.location.origin + '/tripoasia/master/beta/partner', // Set your angular base path here for partner end
            siteurl: '',
            mobileWeburl: '',
            serverURL: window.location.origin + ":3000/", // this is the api base url
            imageURL: window.location.origin + '/tripoasia/server/uploads/'
        }
    });
