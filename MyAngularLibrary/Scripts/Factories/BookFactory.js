var BookFactory = function($http, $q) {

    var factory = {};

    factory.getBooks = function(page, query) {
        var deferredObject = $q.defer();
        $http.get(
            "/Book/Get",
            {params: { page: page, query: query } }
        ).success(function (data) {
            deferredObject.resolve({ success: true, data: data });
        }).error(function(error) {
            deferredObject.resolve({ success: false, error: error });
        });

        return deferredObject.promise;
    }

    factory.orderBook = function(data) {
        var deferredObject = $q.defer();
        $http.post(
                "/Book/Order",
                data
            )
            .success(function(data) {
                deferredObject.resolve({ success: true });
            })
            .error(function(data) {
                deferredObject.resolve({ success: false });
            });

        return deferredObject.promise;
    }

    factory.returnBook = function (id) {
        var deferredObject = $q.defer();
        $http.post(
                "/Book/Return",
                {bookId: id}
            )
            .success(function (data) {
                deferredObject.resolve({ success: true });
            })
            .error(function (data) {
                deferredObject.resolve({ success: false });
            });

        return deferredObject.promise;
    }

    factory.addBook = function(book) {
        var deferredObject = $q.defer();

        $http.post("/Book/Create", book)
            .success(function (data) {
                if (data == "True") {
                    deferredObject.resolve({ success: true });
                } else {
                    deferredObject.resolve({ success: false });
                }
            })
            .error(function() {
                deferredObject.resolve({ success: false });
            });

        return deferredObject.promise;
    }

    return factory;
}

BookFactory.$inject = ["$http", "$q"];