var DefaultController = function($scope, $modal, BookFactory) {

    $scope.title = "Books";

    $scope.page = 1;
    $scope.pagesAmount = {};

    $scope.query = "";

    $scope.navbarProperties = {
        isCollasped: true
    };

    $scope.$watch("query",
        function () {
            getBooks();
        });

    $scope.books = [];
    
    $scope.getNumber = function (num) {
        return new Array(num);
    }

    $scope.orderBy = "Id";
    $scope.reverse = false;

    function getBooks() {
        var result = BookFactory.getBooks($scope.page, $scope.query);
        result.then(function (data) {
            $scope.books = data.data.books;
            $scope.pages = {};
            for (var i = 1; i <= Math.ceil(data.data.booksAmount / 10); i++) {
                $scope.pages[i] = {
                    number: i,
                    current: $scope.page === i
                };
            }
        });
    }

    $scope.returnBook = function(id) {
        var result = BookFactory.returnBook(id);
        result.then(function (data) {
            getBooks();
        });
    }

    $scope.orderBook = function (id) {
        var modalInstance = $modal.open({
            templateUrl: "/Book/Order/" + id,
            controller: "BookOrderController as bookOrderCtrl",
            resolve: {
                bookId: function() {
                    return id;
                }
            }
        });

        modalInstance.result.then(function() {
            getBooks();
        });
    }

    $scope.toPage = function(page) {
        $scope.page = page;
        getBooks();
    }

    $scope.addBook = function() {
        var modalInstance = $modal.open({
            templateUrl: "/Book/Create",
            controller: "BookCreateController as ctrl"
        });

        modalInstance.result.then(function () {
            getBooks();
        });
    };

    $scope.takeBook = function(id) {
        var result = BookFactory.takeBook(id);
        result.then(function(data) {
            getBooks();
        });
    }

    getBooks();
}

DefaultController.$inject = ["$scope", "$modal", "BookFactory"];