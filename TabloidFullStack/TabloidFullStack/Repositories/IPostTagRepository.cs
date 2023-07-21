using TabloidFullStack.Models;

namespace TabloidFullStackRepositories
{
    public interface IPostTagRepository
    {
        public List<Tag> GetAllPostsTags(int id);

    }
}