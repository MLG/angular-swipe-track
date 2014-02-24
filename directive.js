'use strict';

angular.module('mlgSwipeTrack', [])
  .directive('mlgSwipeTrack', function ($timeout) {
    return {
      restrict: 'EAC',
      scope: {
        barcodeSubmit: '&onScan',
        model: '=?ngModel'
      },
      link: function postLink(scope) {
        window.onScanAppBarCodeData = function (barcode) {
          if (!angular.isUndefined(barcode)) {
            if (angular.isFunction(scope.barcodeSubmit)) {
              $timeout(function () {scope.barcodeSubmit({barcode: barcode});}, 1);
            }
            $timeout(function () { scope.model = barcode }, 1);
            return true;
          }
          return false;
        };
      }
    };
  });