using TabloidFullStack.Models;

namespace TabloidFullStack.Repositories
{
    public interface ICategoryRepository
    {
        List<Category> GetAll();
        //Category GetById(int id);
    }
}