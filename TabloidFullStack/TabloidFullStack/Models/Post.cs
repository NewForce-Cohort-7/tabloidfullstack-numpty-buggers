using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace TabloidFullStack.Models
{
    public class Post
    {
        public int Id { get; set; }

        [Required] 
        public string Title { get; set; }

        [Required]
        public string Content { get; set; }

        [DisplayName("ImageUrl")]
        public string ImageLocation { get; set; }

        public DateTime CreateDateTime { get; set; }

        [DisplayName("Published")]
        public DateTime PublishDatetime { get; set; }

        public bool IsApproved { get; set; }

        [DisplayName("Category")]
        public int CategoryId { get; set; }

        [DisplayName("Author")]
        public int UserProfileId { get; set; }

        public UserProfile UserProfile { get; set; }

        public Category Category { get; set; }
    }
}
