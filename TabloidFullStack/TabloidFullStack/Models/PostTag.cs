namespace TabloidFullStack.Models
{
    public class PostTag
    {
       
        public int Id { get; set; }
        public int PostId { get; set; }
        public int TagId { get; set; }
        public List <Tag>tagId { get; set; } //reviewed doggo - the owner model had a list of dogs. dogs = tags, owners = posts. dogs are assigned to owners by the ownerID. in this case we are making a list of the tag ids?
}

