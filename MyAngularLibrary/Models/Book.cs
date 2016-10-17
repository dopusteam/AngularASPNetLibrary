using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace MyAngularLibrary.Models
{
    public class Book
    {
        public int Id { get; set; }
        [Required]
        public string Title { get; set; }

        public Author Author { get; set; }
        [Required]
        public int AuthorId { get; set; }

        public int? ClientId { get; set; }
        public Client Client { get; set; }
    }
}