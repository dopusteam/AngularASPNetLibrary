var LoginController = function ($scope, $stateParams, $location, AuthService)
{
    $scope.loginForm = {
        emailAddress: "",
        password: "",
        rememberMe: false,
        returnUrl: $stateParams.returnUrl
    };

    $scope.login = function() {
        var result = AuthService.login($scope.loginForm
            .emailAddress,
            $scope.loginForm.password,
            $scope.loginForm.rememberMe);
        result.then(function(result) {
            if (result.success) {
                if ($scope.loginForm.returnUrl !== undefined) {
                    $location.path("/Home/Index");
                } else {
                    $location.path($scope.loginForm.returnUrl);
                }
            } else {
                $scope.loginForm.loginFailure = true;
            }
        });
    }
}

LoginController.$inject = ["$scope", "$stateParams", "$location", "AuthService"];