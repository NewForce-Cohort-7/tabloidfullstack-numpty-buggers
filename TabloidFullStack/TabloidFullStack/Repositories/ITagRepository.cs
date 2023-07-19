using TabloidFullStack.Models;

namespace TabloidFullStack.Repositories
{
    public interface ITagRepository
    {
        public List<Tag> GetAllTags();
        void Add(Tag tag);
        void Delete(int id);
    }
}