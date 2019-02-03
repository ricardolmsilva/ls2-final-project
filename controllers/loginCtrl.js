app.controller('loginCtrl', function($rootScope, $scope, $location, AuthenticationService) {

  $scope.signIn = function() {

    $rootScope.authenticatedUser = null;
    $scope.error = null;

    AuthenticationService.signIn($scope.user.username, $scope.user.password).then(

      function(result) {

        $rootScope.authenticatedUser = result;
        $location.path('/portal');

      },

      function(error) {

        $scope.error = error;

      });
  };


  $scope.signOut = function() {

    $rootScope.authenticatedUser = null;
    $location.path('/login');
  }

});
