appControllers.controller(
  "invoiceController",
  function ($scope, $routeParams, invoices) {
    var invoiceId = $routeParams.Id;
    $scope.title = "Invoice: " + invoiceId;
    $scope.entity = {};
    $scope.IsVisible = false;

    invoices.map((x) => {
      if (x.Id === parseInt(invoiceId)) {
        $scope.entity = x;
        return x;
      }
    });
    $scope.ShowHide = function(){
      $scope.IsVisible = $scope.IsVisible ==false? $scope.IsVisible = true:$scope.IsVisible = false;
  }
  }
);
