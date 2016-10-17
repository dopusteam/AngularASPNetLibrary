var ClientFactory = function ($http, $q) {

    var factory = {};

    factory.getClients = function () {
        var deferredObject = $q.defer();

        $http.get(
            "/Client/Get",
            {}
        ).success(function (data) {
            deferredObject.resolve({ success: true, items: data });
        }).error(function (error) {
            deferredObject.resolve({ success: false, error: error });
        });

        return deferredObject.promise;
    }

    factory.addClient = function (book) {
        var deferredObject = $q.defer();

        $http.post("/Client/Create", book)
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

    return factory;
}

ClientFactory.$inject = ["$http", "$q"];