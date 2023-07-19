using TabloidFullStack.Models;

namespace TabloidFullStack.Repositories
{
    public interface IPostRepository
    {
        List<Post> GetAll();
        List<Post> GetUsersPosts(int userProfileId);
    }
}