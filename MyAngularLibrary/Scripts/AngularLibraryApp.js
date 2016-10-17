var AngularLibraryApp = angular.module("AngularLibraryApp", ["ui.router", "ui.bootstrap"]);

AngularLibraryApp.controller("DefaultController", DefaultController);
AngularLibraryApp.controller("LoginController", LoginController);
AngularLibraryApp.controller("RegisterController", RegisterController);
AngularLibraryApp.controller("BookCreateController", BookCreateController);
AngularLibraryApp.controller("BookOrderController", BookOrderController);
AngularLibraryApp.controller("ClientCreateController", ClientCreateController);
AngularLibraryApp.controller("ClientController", ClientController);

AngularLibraryApp.factory("AuthHttpResponseInterceptor", AuthHttpResponseInterceptor);
AngularLibraryApp.factory("BookFactory", BookFactory);
AngularLibraryApp.factory("AuthorFactory", AuthorFactory);
AngularLibraryApp.factory("ClientFactory", ClientFactory);
AngularLibraryApp.service("AuthService", AuthService);

var configFunction = function ($stateProvider, $httpProvider, $locationProvider) {

    $locationProvider.hashPrefix("!").html5Mode({ enabled: true, requireBase: false });

    $stateProvider
        .state("books",
        {
            url: "/books",
            views: {
                "containerOne": {
                    templateUrl: "/Book/Index",
                    controller: DefaultController
                }
            }
        }).state("clients",
        {
            url: "/clients",
            views: {
                "containerOne": {
                    templateUrl: "/Client/Index",
                    controller: "ClientController as ctrl"
                }
            }
        }).state("login",
        {
            url: "/login",
            views: {
                "containerOne": {
                    templateUrl: "/Account/Login",
                    controller: LoginController
                }
            }
        }).state("register",
        {
            url: "/register",
            views: {
                "containerOne": {
                    templateUrl: "/Account/Register",
                    controller: RegisterController
                }
            }
        });

    $httpProvider.interceptors.push("AuthHttpResponseInterceptor");
}

 configFunction.$inject = ["$stateProvider", "$httpProvider", "$locationProvider"];

 AngularLibraryApp.config(configFunction);