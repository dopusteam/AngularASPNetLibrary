var BookCreateController = function($scope, $modalInstance, BookFactory, AuthorFactory) {
    var ctrl = this;

    ctrl.book = {};

    ctrl.authors = [];

    ctrl.error = false;

    function getAuthors() {
        var result = AuthorFactory.getAuthors();
        result.then(function (data) {
            ctrl.authors = data.items;
        });
    }

    ctrl.save = function() {
        var result = BookFactory.addBook(ctrl.book);
        result.then(function (data) {
            if (data.success) {
                $modalInstance.close();
            } else {
                ctrl.error = true;
            }
        });
    }

    ctrl.cancel = function() {
        $modalInstance.dismiss();
    }

    getAuthors();
}

BookCreateController.$inject = ["$scope", "$modalInstance", "BookFactory", "AuthorFactory"];