var ClientCreateController = function($scope, $modalInstance, ClientFactory) {
    var ctrl = this;

    ctrl.client = {};
    
    ctrl.error = false;

    ctrl.save = function() {
        var result = ClientFactory.addClient(ctrl.client);
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
}

ClientCreateController.$inject = ["$scope", "$modalInstance", "ClientFactory"];