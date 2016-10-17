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
    public class BookController : Controller
    {
        LibraryContext db = new LibraryContext();

        [HttpGet]
        public JsonResult Get(int page = 1, string query = "")
        {
            var books = from b in db.Books.OrderBy(c => c.Id).Skip((page - 1) * 10).Take(10)
                        select new
                        {
                            b.Id,
                            b.Title,
                            Client = new { Name = b.Client != null ? b.Client.Name : "" }
                        };
            var booksAmount = db.Books.Count();

            if (!string.IsNullOrEmpty(query))
            {
                books = from b in db.Books.OrderBy(c => c.Id).Skip((page - 1)*10).Take(10)
                    where b.Title.Contains(query)
                    select new
                    {
                        b.Id,
                        b.Title,
                        Client = new {Name = b.Client != null ? b.Client.Name : ""}
                    };
                booksAmount = db.Books.Count(b => b.Title.Contains(query));
            }

            return Json(new {books = books.ToArray(), booksAmount }, JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public ActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public ActionResult Order(int bookId)
        {
            return View();
        }

        [HttpPost]
        public bool Order(int bookId, int clientId)
        {
            Book book = db.Books.Find(bookId);
            if (book == null)
            {
                return false;
            }
            book.ClientId = clientId;
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

        [HttpPost]
        public bool Return(int bookId)
        {
            Book book = db.Books.Find(bookId);
            if (book == null)
            {
                return false;
            }

            book.ClientId = null;
            book.Client = null;
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

        [HttpGet]
        public ActionResult Create()
        {
            return View();
        }

        [HttpPost]
        public bool Create(Book book)
        {
            if (!ModelState.IsValid)
            {
                return false;
            }
            db.Books.Add(book);
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