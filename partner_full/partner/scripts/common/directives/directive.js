
(function () {
    'use strict';

    angular.module('tripoAsiaApp')
            .directive('autoComplete', function ($timeout) {

                return function (scope, iElement, iAttrs) {

                    iElement.focus(function () {

                        if (iAttrs.fragmentType == 0)
                        {
                            var u = iAttrs.fragment;
                        } else
                        {


                            var prop_arr = iAttrs.fragment.split('.');
                            for (var key in prop_arr)
                            {
                                if (key == 0)
                                {
                                    var u = scope[prop_arr[key]];
                                } else
                                {
                                    u = u[prop_arr[key]];
                                }

                            }

                            u = dpi_base_url + u;


                        }

                        iElement.autocomplete({
                            source: u,
                            select: function () {
                                $timeout(function () {
                                    iElement.trigger('input');
                                    iElement.blur();
                                }, 0);
                            }
                        });

                    });

                };
            });

})();
