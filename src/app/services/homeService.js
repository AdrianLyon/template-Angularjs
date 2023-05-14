appServices.service("homeService", function ($http) {
  var resourceUrl = "../app/data/greetings/invoices.json";

  // Services should return the promise rather than the data. This is the asynchronous way.
  return {
    getAll: function () {
      return $http.get(resourceUrl).then(function (response) {
        return response.data;
      });
    },
  };
});
