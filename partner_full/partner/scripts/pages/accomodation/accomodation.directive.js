(function() {
    'use strict';

    angular.module('tripoAsiaApp.pages.accomodation')
        .directive('fileModel', ['$parse', function($parse) {
            return {
                restrict: 'A',
                link: function(scope, element, attrs) {
                    var model = $parse(attrs.fileModel);
                    var src = $parse(attrs.fileSrc);
                    var modelSetter = model.assign;
                    var modelSetter2 = src.assign;

                    console.log('test');

                    element.bind('change', function() {
                        var file = element[0].files[0];

                        function changeSrcImage(e) {
                            scope.$apply(function() {
                                if (modelSetter2) {
                                    modelSetter2(scope, e.target.result);
                                }
                            });
                        };
                        scope.$apply(function() {
                            if (file) {
                                // console.log('Setting file on model', file);
                                modelSetter(scope, file);
                            }
                        });

                        if (file) {
                            var reader = new FileReader();
                            reader.onload = changeSrcImage;
                            reader.readAsDataURL(file);
                        }
                        //console.log('element[0].files[0]', file);

                    });
                }
            };
        }])
        .directive('checkFileType', function() {
            return {
                restrict: 'A',

                scope: {
                    fromDirectiveFn: '=method'
                },
                link: function(scope, elem, attr, ctrl) {

                    $(elem).bind('change', function() {
                        var fileType = this.files[0].type.split('/');
                        fileType = fileType[0];
                        if (fileType != 'image') {
                            scope.fromDirectiveFn(0, attr.id);
                        } else {
                            scope.fromDirectiveFn(1, attr.id);
                        }
                    });
                }
            }
        });
})();
