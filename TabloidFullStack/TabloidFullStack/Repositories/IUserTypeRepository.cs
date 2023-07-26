using TabloidFullStack.Models;

namespace TabloidFullStack.Repositories
{
    public interface IUserTypeRepository
    {
        List<UserType> GetAll();
        UserType GetUserTypeById(int id);
        void Add(UserType userType);
    }
}