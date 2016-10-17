using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace MyAngularLibrary.Models
{
    public class LibraryDbInitializer : DropCreateDatabaseAlways<LibraryContext>
    {
        protected override void Seed(LibraryContext db)
        {
            db.Authors.Add(new Author { Id = 1, Name = "Stephen King" });
            db.Authors.Add(new Author { Id = 2, Name = "Alexander Pushkin" });
            db.Authors.Add(new Author { Id = 3, Name = "Sergey Esenin" });
            db.Authors.Add(new Author { Id = 4, Name = "Lev Tolstoy" });

            db.Clients.Add(new Client { Id = 1, Name = "Ivanov Ivan" });
            db.Clients.Add(new Client { Id=  2, Name = "Petrov Ivan" });
            db.Clients.Add(new Client { Id = 3, Name = "Sidorov Alexander" });
            db.Clients.Add(new Client { Id = 4, Name = "Kuznecov Vladimir" });
            db.Clients.Add(new Client { Id = 5, Name = "Ivanov Sergey" });
            db.Clients.Add(new Client { Id = 6, Name = "Pertov Dmitriy" });

            db.Books.Add(new Book { Title = "The best book in the world", AuthorId = 1, ClientId= 1 });
            db.Books.Add(new Book { Title = "War and peace", AuthorId = 2 });
            db.Books.Add(new Book { Title = "Dark knight", AuthorId = 3, ClientId = 1 });
            db.Books.Add(new Book { Title = "Batman", AuthorId = 4, ClientId = 1 });
            db.Books.Add(new Book { Title = "Superman", AuthorId = 1, ClientId = 1 });
            db.Books.Add(new Book { Title = "LOST", AuthorId = 2 });
            db.Books.Add(new Book { Title = "Another world", AuthorId = 3 });
            db.Books.Add(new Book { Title = "The lord of the ring", AuthorId = 4, ClientId = 2 });
            db.Books.Add(new Book { Title = "Mortal Kombat", AuthorId = 1 });
            db.Books.Add(new Book { Title = "Mortal Kombat 2", AuthorId = 2 });
            db.Books.Add(new Book { Title = "Matrix", AuthorId = 2 });
            db.Books.Add(new Book { Title = "White rabbit", AuthorId = 2, ClientId = 3 });
            db.Books.Add(new Book { Title = "White mane", AuthorId = 3, ClientId = 3 });
            db.Books.Add(new Book { Title = "Fox Mulder", AuthorId = 3 });
            db.Books.Add(new Book { Title = "X-Files", AuthorId = 4 });
            db.Books.Add(new Book { Title = "Harry Potter", AuthorId = 1, ClientId = 6 });



            base.Seed(db);
        }
    }
}