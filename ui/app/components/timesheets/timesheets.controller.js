angular
  .module('SwimResultinator')
  .controller('TimesheetCtrl', TimesheetCtrl)
  .factory('TimesheetFactory', TimesheetFactory)
  .config(function(appRouteProvider) {
    appRouteProvider.setName('timesheet', TimesheetCtrl);
  });

function TimesheetCtrl($scope, $location, $route, $routeParams, TimesheetFactory, Config) {

  $scope.config = Config;
  $scope.menu = { title: "Timesheet management" };
  $scope.status = $route.current.status;

  $scope.navigateTo = function(to, event) {
    $location.path('/timesheets' + to);
  };

  $scope.getAll = function() {
    TimesheetFactory.getAll().then(function(result) {
      $scope.timesheets = result.data;
    });
  };

  $scope.add = function() {
    $scope.navigateTo('/edit');
  };

  $scope.save = function() {
    TimesheetFactory.save($scope.timesheet).then(function(response) {
      $scope.swimmer = response.data;
    })
  };

  $scope.delete = function(id) {
    TimesheetFactory.delete(id);
    $scope.getAll();
  };

  if($routeParams.id) {
    TimesheetFactory.get($routeParams.id).then(function(response) {
      $scope.timesheet = response.data;
      $scope.menu.title = "Edit timesheet";
    });
  };

  if($scope.status == 'list') {
    $scope.menu.title = "Timesheet management";
  } else if($scope.status == 'edit') {
    $scope.menu.title = "Create new timesheet";
  }
}

function TimesheetFactory($http, UrlService) {
  var factory = {};

  factory.getAll = function() {
    return $http.get(UrlService.baseUrl + '/api/timesheets');
  }

  factory.get = function(id) {
    return $http.get(UrlService.baseUrl + '/api/timesheets/' + id);
  }

  factory.save = function(id) {
    return $http.post(UrlService.baseUrl + '/api/timesheets/save', id);
  }

  factory.delete = function(id) {
    return $http.get(UrlService.baseUrl + '/api/timesheets/delete/' + id);
  }

  return factory;
}