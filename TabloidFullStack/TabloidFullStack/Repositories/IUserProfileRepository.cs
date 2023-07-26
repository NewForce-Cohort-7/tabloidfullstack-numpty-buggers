using System.Collections.Generic;
using TabloidFullStack.Models;

namespace TabloidFullStack.Repositories
{
    public interface IUserProfileRepository
    {
        List<UserProfile> GetAll();
        UserProfile GetUserProfileById(int id);
        public void Update(UserProfile userProfile);
    }
}