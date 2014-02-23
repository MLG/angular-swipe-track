'use strict';

angular.module('mlgSwipeTrack', [])
  .directive('mlgSwipeTrack', function () {
    return {
      restrict: 'EAC',
      scope: {
        barcodeSubmit: '&onScan'
      },
      link: function postLink(scope) {
        window.onScanAppBarCodeData = function (bar) {
          if (!angular.isUndefined(bar) && angular.isFunction(scope.barcodeSubmit)) {
            return scope.barcodeSubmit({barcode: bar});
          }
          return false;
        };
      }
    };
  });
