using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MyAngularLibrary.Models;
using System.Threading.Tasks;
using System.Data.Entity.Infrastructure;
using System.Data.Entity;
using Microsoft.AspNet.Identity;

namespace MyAngularLibrary.Controllers
{
    [Authorize]
    public class ClientController : Controller
    {
        LibraryContext db = new LibraryContext();

        [HttpGet]
        public JsonResult Get()
        {
            var clients = from c in db.Clients
                select new
                {
                    c.Name,
                    c.Id,
                    Books = c.Books.Count()
                };

            return Json(clients, JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public ActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public ActionResult Create()
        {
            return View();
        }

        [HttpPost]
        public bool Create(Client client)
        {
            if (!ModelState.IsValid)
            {
                return false;
            }
            db.Clients.Add(client);
            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException ex)
            {
                return false;
            }
            return true;
        }

    }
}