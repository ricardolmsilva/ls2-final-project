app.controller('loginCtrl', function($rootScope, $scope, $location, AuthenticationService){

    $scope.signIn = function () {

        $rootScope.authenticatedUser = null;
        $scope.error = null;

        AuthenticationService.signIn($scope.user.username, $scope.user.password).then(

            function (result) {

                $rootScope.authenticatedUser = result;
                $location.path('/recibos/portal');

            },

            function (error) {

                $scope.error = error;

            });
    };

    $scope.$on('$routeChangeSuccess', function (event, data) {
        $scope.title = data.title;
    });


});
