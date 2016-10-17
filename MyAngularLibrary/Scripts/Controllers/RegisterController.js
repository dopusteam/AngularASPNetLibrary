var RegisterController = function ($scope, $location, AuthService) {
    $scope.registerForm = {
        emailAddress: "",
        password: "",
        confirmPassword: ""
    };

    $scope.register = function() {
        var result = AuthService.register($scope.registerForm.emailAddress,
            $scope.registerForm.password,
            $scope.registerForm.confirmPassword);
        result.then(function(result) {
            if (result.success) {
                $location.path("/Home/Index");
            } else {
                $scope.registerForm.registrationFailure = true;
            }
        });
    }
}

RegisterController.$inject = ["$scope", "$location", "AuthService"];