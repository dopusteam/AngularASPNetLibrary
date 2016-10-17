var AuthService = function ($http, $q) {

    var service = this;

    service.userId = 0;

    this.getUserId = function() {
        var deferredObject = $q.defer();

        $http.post("/Account/GetUserId")
            .success(function (data) {
                if (data === 0) {
                    deferredObject.resolve({ success: false });
                } else {
                    service.userId = data;
                    console.log('!');
                    deferredObject.resolve({ success: true });
                }
            })
            .error(function () {
                deferredObject.resolve({ success: false });
            });
    }

    this.login = function (emailAddress, password, rememberMe) {
        var deferredObject = $q.defer();

        $http.post(
                "/Account/Login",
                {
                    Email: emailAddress,
                    Password: password,
                    RememberMe: rememberMe
                })
            .success(function (data) {
                if (data === 0) {
                    deferredObject.resolve({ success: false});
                } else {
                    service.userId = data;
                    deferredObject.resolve({ success: true });
                }
            })
            .error(function () {
                deferredObject.resolve({ success: false });
            });

        return deferredObject.promise;
    }

    this.register = function (emailAddress, password, confirmPassword) {
        var deferredObject = $q.defer();
        $http.post(
                "/Account/Register",
                {
                    Email: emailAddress,
                    Password: password,
                    ConfirmPassword: confirmPassword
                })
            .success(function (data) {
                if (data == "True") {
                    deferredObject.resolve({ success: true });
                } else {
                    deferredObject.resolve({ success: false });
                }
            })
            .error(function () {
                deferredObject.resolve({ success: false });
            });

        return deferredObject.promise;
    }
}

AuthService.$inject = ["$http", "$q"];