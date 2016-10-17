using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MyAngularLibrary.Models;

namespace MyAngularLibrary.Controllers
{
    public class AuthorController : Controller
    {
        LibraryContext db = new LibraryContext();

        // GET: Author
        public JsonResult Get()
        {
            var authors = db.Authors.ToArray();

            return Json(authors, JsonRequestBehavior.AllowGet);
        }
    }
}