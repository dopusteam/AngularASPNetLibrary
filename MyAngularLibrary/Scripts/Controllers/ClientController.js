var ClientController = function ($scope, $modal, ClientFactory) {

    var ctrl = this;

    ctrl.title = "Clients";

    ctrl.navbarProperties = {
        isCollasped: true
    };

    ctrl.clients = [];

    ctrl.orderBy = "Id";
    ctrl.reverse = true;

    function getClients() {
        var result = ClientFactory.getClients();
        result.then(function (data) {
            ctrl.clients = data.items;
        });
    }

    ctrl.addClient = function () {
        var modalInstance = $modal.open({
            templateUrl: "/Client/Create",
            controller: "ClientCreateController as ctrl"
        });

        modalInstance.result.then(function () {
            getClients();
        });
    };

    getClients();
}

ClientController.$inject = ["$scope", "$modal", "ClientFactory"];