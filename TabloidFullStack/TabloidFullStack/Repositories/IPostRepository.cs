using TabloidFullStack.Models;

namespace TabloidFullStack.Repositories
{
    public interface IPostRepository
    {
        List<Post> GetAll();
        List<Post> GetPostsByUserId(int userProfileId);
        Post GetById(int id);
    }
}