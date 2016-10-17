using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MyAngularLibrary.Models
{
    public class Client
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public ICollection<Book> Books { get; set; }


        public Client()
        {
            Books = new List<Book>();
        }
    }
}