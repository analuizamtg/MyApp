angular
  .module('myApp.directives')
  .directive('moveFocus', function() {

    function getCaretPosition(elem) {
      return elem.setSelectionRange && elem.selectionStart;
    }

    return {
      restrict: 'A',
      link: function(scope, elem, attr) {
        var tabindex = parseInt(attr.tabindex);
        var maxlength = parseInt(attr.maxlength);

        elem.on('input, keydown', function(evt) {
          var val = elem.val(), cp, charCode = (evt.which) ? evt.which : evt.keyCode;

          if (val.length === maxlength && [8, 37, 38, 39, 40, 46].indexOf(charCode) === -1) {
            var next = document.querySelectorAll('#input' + (tabindex + 1));
            next.length && next[0].focus();
            return;
          }

          cp = getCaretPosition(this);
          if ((cp === 0 && charCode === 46) || (cp === 1 && charCode === 8)) {
            var prev = document.querySelectorAll('#input' + (tabindex - 1));
            evt.preventDefault();
            elem.val(val.substring(1));
            prev.length && prev[0].focus();
            return;
          }
        });
      }
    };
  });