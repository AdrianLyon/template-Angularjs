app.config(function ($routeProvider) {
  $routeProvider
    .when("/home", {
      controller: "homeController",
      templateUrl: "../app/partials/homeView.html",
      resolve: {
        invoices: [
          "repositories",
          function (repositories) {
            return repositories.home.getAll().then((data) => data);
          },
        ],
      },
    })
    .when("/invoice/:Id/view", {
      controller: "invoiceController",
      templateUrl: "../app/partials/invoice.html",
      resolve: {
        invoices: [
          "repositories",
          function (repositories) {
            return repositories.home.getAll().then((data) => data);
          },
        ],
      },
    })
    .otherwise({
      redirectTo: "/home",
    });
});
appControllers.controller("homeController", function ($scope, invoices) {
  $scope.title = "List Invoices";
  $scope.entities = invoices;
});
