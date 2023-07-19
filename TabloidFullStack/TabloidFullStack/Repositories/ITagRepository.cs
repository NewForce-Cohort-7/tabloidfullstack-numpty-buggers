using TabloidFullStack.Models;

namespace TabloidFullStack.Repositories
{
    public interface ITagRepository
    {
        public List<Tag> GetAllTags();
        public Tag GetTagById(int id);

        void Add(Tag tag);
        void Update(Tag tag);
        void Delete(int id);
    }
}