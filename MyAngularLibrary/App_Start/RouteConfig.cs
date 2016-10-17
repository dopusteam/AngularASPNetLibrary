using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace MyAngularLibrary
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                name: "login",
                url: "Account/Login",
                defaults: new { controller = "Account", action = "Login" }
            );

            routes.MapRoute(
                name: "register",
                url: "Account/Register",
                defaults: new { controller = "Account", action = "Register" }
            );

            routes.MapRoute(
                name: "books",
                url: "Book/Index",
                defaults: new { controller = "Book", action = "Index" }
            );

            routes.MapRoute(
                name: "bookOrder",
                url: "Book/Order/{bookId}/{clientId}",
                defaults: new { controller = "Book", action = "Order", bookId = UrlParameter.Optional, clientId = UrlParameter.Optional }
            );

            routes.MapRoute(
                name: "bookReturn",
                url: "Book/Return/{bookId}",
                defaults: new { controller = "Book", action = "Return", bookId = UrlParameter.Optional }
            );

            routes.MapRoute(
                name: "bookList",
                url: "Book/Get/{page}/{query}",
                defaults: new { controller = "Book", action = "Get", page = UrlParameter.Optional, query = UrlParameter.Optional }
            );

            routes.MapRoute(
                name: "authorList",
                url: "Author/Get",
                defaults: new { controller = "Author", action = "Get" }
            );

            routes.MapRoute(
                name: "clients",
                url: "Client/Index",
                defaults: new { controller = "Client", action = "Index" }
            );

            routes.MapRoute(
                name: "clientList",
                url: "Client/Get",
                defaults: new { controller = "Client", action = "Get" }
            );

            routes.MapRoute(
                name: "bookAdd",
                url: "Book/Create",
                defaults: new { controller = "Book", action = "Create" }
            );

            routes.MapRoute(
                name: "clientAdd",
                url: "Client/Create",
                defaults: new { controller = "Client", action = "Create" }
            );

            routes.MapRoute(
                name: "Default",
                url: "{*url}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}
