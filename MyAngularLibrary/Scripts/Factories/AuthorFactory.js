var AuthorFactory = function ($http, $q) {
    var factory = {};
    factory.getAuthors = function() {
        var deferredObject = $q.defer();

        $http.get(
            "/Author/Get",
            {}
        ).success(function (data) {
            deferredObject.resolve({ success: true, items: data });
        }).error(function (error) {
            deferredObject.resolve({ success: false, error: error });
        });

        return deferredObject.promise;
    }

    return factory;
}

AuthorFactory.$inject = ["$http", "$q"];