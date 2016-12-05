"use strict";

angular.module('myApp.directives', [])
    .directive('currency', function () {
    function formatAsCurrency(value) {
    
    var newValue = "";
    if (value ===  undefined) {
        return newValue;
    }
    
    value = value.replace(/[,]+/g, "");
    value = value.replace(/[\.]+/g, "");
    
    while (value.indexOf("0") === 0){
        value = value.substring(1, value.length);
    }

    if (value.length === 0){
        return newValue;
    }
    if (value.length === 1){
        newValue = "0,0" + value;
    } else if (value.length == 2) {
        newValue = "0," + value;
    } else {
        var cents = value.substring(value.length-2, value.length);
        var dollars = value.substring(0, value.length-2);
        
        var places = 0;
        for (var i = 0; i < dollars.length; i++){
            if ((dollars.length - places) % 3 == 0 && places > 0){
                newValue = newValue + ".";    
            }
            newValue = newValue + dollars[i];
            places++;
        }
        newValue = newValue + "," + cents;
    }
    return newValue;
}    

    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attrs, ngModelController) {
            
            element.bind('keyup', function (evt) {
                evt = (evt) ? evt : window.event;
                var charCode = (evt.which) ? evt.which : evt.keyCode;
                if ((charCode < 35 || charCode > 57) && (charCode < 96 || charCode > 105) && (charCode < 8 || charCode > 12)) {
                    return false;
                } else {
                    var moeda = formatAsCurrency(element.val());
                    ngModelController.$setViewValue(moeda);
                    ngModelController.$render();
                }
                
                return true;
            });
            
            element.bind('keydown', function (evt) {
                evt = (evt) ? evt : window.event;
                var charCode = (evt.which) ? evt.which : evt.keyCode;
                if ((charCode < 35 || charCode > 57) && (charCode < 96 || charCode > 105) && (charCode < 8 || charCode > 12)) {
                    evt.preventDefault();
                    return false;
                } 
                
                return true;
            });
        }
    };
});