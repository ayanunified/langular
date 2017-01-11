'use strict';

/**
 * @ngdoc service
 * @name SingularHttp.shttp
 * @description
 * # shttp
 * Provider in the SingularHttp.
 */

var difference = function (source, target) {
    return source.filter(function (current) {
        return target.indexOf(current) === -1;
    });
}
String.prototype.replaceAll = function (search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

angular.module('SingularHttp', [])
        .provider('shttp', function () {

            var serviceBaseUrl = "";
            var ENV = '';
            var dfs, dfe, beforeRequest;
            var host = window.location.hostname;
            var host_array = host.split('.');

            var getEquevalentHeader = function (type) {
                var header = {};
                switch (type) {
                    case "POST":
                        header = {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        };
                        break;
                    default:
                        header = {};
                        break;
                }
                return header;
            };

            this.setServiceBase = function (url) {
                serviceBaseUrl = url;
            };
            this.setEnviorement = function (env) {
                ENV = env;
            };
            this.beforeRequest = function (fn) {
                beforeRequest = fn;
            };
            this.$get = ["$http", "$q", '$httpParamSerializerJQLike', 'configService',

                function ($http, $q, $httpParamSerializerJQLike, configService) {
                    var defer = $q.defer();
                    return {
                        httpConfig: {},
                        beforeRFN: null,
                        resetHttpConfig: function () {
                            this.httpConfig = {};
                            return this;
                        },

                        setHttpConfig: function (config, value) {
                            value = value || '';
                            if (typeof config == 'object') {
                                this.httpConfig = angular.extend(this.httpConfig, config)
                            }
                            if (config) {
                                this.httpConfig[config] = value;
                            }
                            return this;
                        },
                        noBRFC: function () {
                            return this.setHttpConfig('noBRFC', true)
                        },
                        noDefault: function (type) {
                            type = type || false;
                            if (type === 'S') {
                                this.setHttpConfig('nodefaultS', true);
                            } else if (type === 'E') {
                                this.setHttpConfig('nodefaultE', true);
                            } else {
                                this.setHttpConfig('nodefaultS', true);
                                this.setHttpConfig('nodefaultE', true);
                            }
                            return this;
                        },
                        noLoader: function () {
                            return this.setHttpConfig('ignoreLoadingBar', true);
                        },
                        setDefaultHttpFn: function (success, error) {
                            dfs = success;
                            dfe = error;
                        },
                        httpCache: function () {
                            return this.setHttpConfig('isCache', true);
                        },

                        getServiceUrl: function (endPoint) {
                            return configService.getEnvConfig().serverURL + endPoint;
                        },
                        requestContentType: function (type) {
                            this.httpConfig.headers = type;
                            return this;
                        },
                        setHttpHeader: function (config, value) {
                            value = value || '';
                            if (!this.httpConfig.headers) {
                                this.httpConfig.headers = {};
                            }
                            if (typeof config == 'object') {
                                this.httpConfig.headers = angular.extend(this.httpConfig, config)
                            }
                            if (config) {
                                this.httpConfig.headers[config] = value;
                            }
                            return this;
                        },
                        request: function (type, endPoint, data, config) {

                            var myUrl = '';
                            type = type || 'GET';
                            config = config || {};
                            data = data || {};


                            config = angular.extend(config, this.httpConfig);
                            var defer = $q.defer();
                            var headers = {};

                            if (config.headers) {
                                headers = config.headers;
                            } else {
                                headers = getEquevalentHeader(type);
                            }
                            // console.log("config.headers", headers);


                            if (config.isFullPath) {
                                myUrl = endPoint;
                            } else {
                                myUrl = this.getServiceUrl(endPoint);
                            }

                            var requestObject = {
                                url: myUrl,
                                method: type,
                                data: data,
                                headers: headers,
                            };

                            try {
                                if (beforeRequest && !config.noBRFC) {
                                    requestObject = beforeRequest(requestObject);
                                }
                            } catch (e) {
                                console.log(e);
                            }

                            if (headers['Content-Type'] == 'application/json') {
                                requestObject.data = JSON.stringify(requestObject.data);
                            } else {
                                requestObject.data = $httpParamSerializerJQLike(requestObject.data);
                            }

                            if (config.cache) {
                                requestObject.cache = true;
                            }

                            if (config.ignoreLoadingBar) {
                                requestObject.ignoreLoadingBar = true;
                            }
                            if (config.isCache) {
                                requestObject.cache = true;
                            }

//                            console.log("config.requestObject", requestObject);

                            $http(requestObject).then(function (response) {
                                if (dfs && !config.nodefaultS) {
                                    dfs.call(this, response);
                                }
                                defer.resolve(response);
                            }, function (response) {
                                if (dfe && !config.nodefaultE) {
                                    dfe.call(this, response);
                                }
                                defer.reject(response);
                            });
                            this.resetHttpConfig();
                            return defer.promise;
                        },
                        post: function (endPoint, data, config) {
                            return this.request('POST', endPoint, data, config);
                        },
                        cpost: function (endPoint, data, config) {
                            config = config || {};
                            config.cache = true;
                            return this.request('POST', endPoint, data, config);
                        },
                        jpost: function (endPoint, data, token, config) {
                            this.setHttpHeader('Content-Type', 'application/json');
                            return this.post(endPoint, data, token, config);
                        },
                        hpost: function (endPoint, data, token, config) {
                            config = config || {};
                            data = data || {};

                            data.auth_token = localStorage.getItem('user_auth_token');

                            return this.request('POST', endPoint, data, config);
                        },

                         admin_post: function (endPoint, data, token, config) {
                            config = config || {};
                            data = data || {};

                            data.auth_token = localStorage.getItem('admin_auth_token');

                            return this.request('POST', endPoint, data, config);
                        },
                        get: function (endPoint, data, config) {
                            return this.request('GET', endPoint, data, config);
                        },
                        cget: function (endPoint, data, config) {
                            config = config || {};
                            config.cache = true;
                            return this.request('GET', endPoint, data, config);
                        },
                        put: function (endPoint, data, config) {
                            return this.request('PUT', endPoint, data, config);
                        },
                        delete: function (endPoint, data, config) {
                            return this.request('DELETE', endPoint, data, config);
                        },
                        hupload: function (endPoint, data, file, token) {
                            token = token || sessionStorage.getItem('api_token');
                            data = data || {};
                            data.api_token = token;

                            return this.upload(endPoint, data, file, token);
                        },
                        upload: function (endPoint, data, file, token) {
                            var uploadUrl = this.getServiceUrl(endPoint);
                            var fd = new FormData();
                            if (file) {
                                angular.forEach(file, function (value, key) {
                                    fd.append(key, value);
                                });
                            }
                            angular.forEach(data, function (value, key) {
                                fd.append(key, value);
                            });
                            token = token || sessionStorage.getItem('api_token');
                            var hdr = {'Content-Type': undefined}
                            // if (token) {
                            //     hdr.api_token = token;
                            // }
                            // hdr
                            fd.append('api_token', token);
                            var defer = $q.defer();
                            $http.post(uploadUrl, fd, {
                                transformRequest: angular.identity,
                                headers: hdr
                            })
                                    .success(function (data) {
                                        defer.resolve(data);
                                    })
                                    .error(function () {
                                        defer.reject(data);
                                    });
                            return defer.promise;
                        }
                    };
                }
            ];
        })
        .directive('fileModel', ['$parse', function ($parse) {
                return {
                    restrict: 'A',
                    link: function (scope, element, attrs) {
                        var model = $parse(attrs.fileModel);
                        var src = $parse(attrs.fileSrc);
                        var modelSetter = model.assign;
                        var modelSetter2 = src.assign;

                        element.bind('change', function () {
                            var file = element[0].files[0];

                            console.log('File', file);

                            function changeSrcImage(e) {
                                scope.$apply(function () {
                                    if (modelSetter2) {
                                        modelSetter2(scope, e.target.result);
                                    }
                                });
                            }
                            ;
                            scope.$apply(function () {
                                if (file) {
                                    modelSetter(scope, file);
                                }
                            });

                            if (file) {
                                var reader = new FileReader();
                                reader.onload = changeSrcImage;
                                reader.readAsDataURL(file);
                            }
                        });
                    }
                };
            }])
        .filter('sdate', function ($filter) {
            return function (input, format) {
                var a = '';
                if (input) {
                    //                    a = new XDate(input).toString(format)
                    a = $filter('date')(new Date(input), format);
                }
                return a;
            };
        })
        .directive('noSpecialChar', function () {
            return {
                require: 'ngModel',
                restrict: 'A',
                link: function (scope, element, attrs, modelCtrl) {
                    modelCtrl.$parsers.push(function (inputValue) {
                        var cleanInputValue = '';
                        if (inputValue == null)
                            return ''
                        cleanInputValue = inputValue.replace(/[^\w\s]/gi, '');
                        if (cleanInputValue != inputValue) {
                            modelCtrl.$setViewValue(cleanInputValue);
                            modelCtrl.$render();
                        }
                        return cleanInputValue;
                    });
                }
            }
        })

//        .directive('replaceIt', function ($log) {
//            return {
//                require: '?ngModel',
//                scope: {
//                    regex: '@replaceIt',
//                    with : '@with',
//                    allowedDec: '@allowedDec'
//                },
//                link: function (scope, element, attrs, model) {
//                    scope.allowedDec = scope.allowedDec ? parseInt(scope.allowedDec) : 2;
//                    if (!model) {
//                        return $log.error("ngModel is not initilized to the directive Doom");
//                    }
//                    model.$parsers.push(function (val) {
//                        if (!val) {
//                            return;
//                        }
//                        var regex = new RegExp(scope.regex);
//                        var replaced = val.replace(regex, scope.with);
//
//                        if (!isNaN(replaced)) {
//                            var Dcount = replaced.split('.').length;
//                            if (Dcount == 2) {
//                                var dc = (replaced.lastIndexOf('.') + 1 + parseInt(scope.allowedDec));
//                                replaced = replaced.slice(0, dc);
//                            }
//                        } else {
//                            var Dcount = replaced.split('.').length;
//                            if (Dcount > 2) {
//                                replaced = replaced.slice(0, (replaced.lastIndexOf('.'))) + replaced.slice((replaced.lastIndexOf('.') + 1), replaced.length);
//                            }
//                        }
//                        if (!isNaN(replaced)) {
//                            replaced = parseFloat(replaced);
//                            replaced = replaced.toFixed(2);
//                        }
//
//                        if (replaced !== val) {
//                            model.$setViewValue(replaced);
//                            model.$render();
//                        }
//                        return replaced;
//                    });
//                }
//            };
//        })
//        .filter('capitalize', function () {
//            return function (input, scope) {
//                if (input) {
//                    input = input.toLowerCase();
//                    return input.substring(0, 1).toUpperCase() + input.substring(1);
//                }
//                return false;
//
//            }
//        })
        .filter('btoa', function () {
            return function (input) {
                if (input) {
                    return btoa(input);
                }
                return false;
            }
        })
        .filter('onlyNumber', function () {
            return function (input) {
                if (input) {
                    return input.replaceAll('[^0-9]', '');
                }
                return false;
            }
        });
