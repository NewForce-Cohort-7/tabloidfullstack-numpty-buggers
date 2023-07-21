using TabloidFullStack.Models;

namespace TabloidFullStackRepositories
{
    public interface IPostTagRepository
    {
        public List<Tag> GetAllPostsTags(int id);

        void AddTagToPost(PostTag postTag);

        void DeleteTagFromPost(int postId, int tagId);
    }
}