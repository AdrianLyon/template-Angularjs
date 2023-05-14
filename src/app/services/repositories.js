appServices.service("repositories", function (homeService) {
  //Import repositories to get access to all object services

  return {
    home: homeService
  };
});
