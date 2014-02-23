'use strict';

angular.module('mlgSwipeTrack', [])
  .directive('mlgSwipeTrack', function ($timeout) {
    return {
      restrict: 'EAC',
      scope: {
        barcodeSubmit: '&onScan'
      },
      link: function postLink(scope) {
        window.onScanAppBarCodeData = function (bar) {
          if (!angular.isUndefined(bar) && angular.isFunction(scope.barcodeSubmit)) {
            $timeout(function () {scope.barcodeSubmit({barcode: bar});}, 1);
            return true;
          }
          return false;
        };
      }
    };
  });

