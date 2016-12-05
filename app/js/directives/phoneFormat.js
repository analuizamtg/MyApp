angular.module('myApp.directives')
.directive("phoneNumberValidator", function () {
    return {
        require: "ngModel",
        restrict: "A",
        link: function (scope, elem, attrs, ctrl) {

            var domElement = elem[0];
            var cursorIndex;

            ctrl.$parsers.push(function (input) {

                var prevValue, nextValue;

                prevValue = input;
                nextValue = input.replace(/[\D]/gi, "");

                if (nextValue.length >= 4 && nextValue.length <= 6) {
                    nextValue = nextValue.replace(/(\d{3})(\d{3})?/, "($1) $2");
                } else if (nextValue.length >= 7 && nextValue.length <= 10) {
                    nextValue = nextValue.replace(/(\d{3})(\d{3})(\d{4})?/, "($1) $2-$3");
                }

                cursorIndex = domElement.selectionStart;
                if (prevValue != nextValue) {
                    ctrl.$setViewValue(nextValue);
                } else {
                     ctrl.$render();
                }

                if (cursorIndex == 6 || cursorIndex == 10) {
                    cursorIndex = cursorIndex + 1;
                    domElement.setSelectionRange(cursorIndex, cursorIndex);
                }
                return input;
            });
        }
    }
});