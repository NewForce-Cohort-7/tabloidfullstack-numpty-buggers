using TabloidFullStack.Models;

namespace TabloidFullStack.Repositories
{
    public interface IPostRepository
    {
        List<Post> GetAll();
        List<Post> GetPostsByUserId(int userProfileId);
        Post GetById(int id);
        void Add(Post post);
        void Delete(int id);
    }
}