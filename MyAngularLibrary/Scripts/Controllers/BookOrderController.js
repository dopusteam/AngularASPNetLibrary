var BookOrderController = function ($scope, $modalInstance, BookFactory, ClientFactory, bookId) {
    var bookOrderCtrl = this;

    bookOrderCtrl.clients = [];

    bookOrderCtrl.error = false;

    bookOrderCtrl.data = {
        ClientId: "",
        BookId: bookId
    };

    function getClients() {
        var result = ClientFactory.getClients();
        result.then(function (data) {
            bookOrderCtrl.clients = data.items;
        });
    }

    bookOrderCtrl.save = function () {
        var result = BookFactory.orderBook(bookOrderCtrl.data);
        result.then(function (data) {
            if (data.success) {
                $modalInstance.close();
            } else {
                bookOrderCtrl.error = true;
            }
        });
    }

    bookOrderCtrl.cancel = function () {
        $modalInstance.dismiss();
    }

    getClients();
}

BookOrderController.$inject = ["$scope", "$modalInstance", "BookFactory", "ClientFactory", "bookId"];