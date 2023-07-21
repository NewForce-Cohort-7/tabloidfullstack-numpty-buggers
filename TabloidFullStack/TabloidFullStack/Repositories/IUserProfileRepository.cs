﻿using TabloidFullStack.Models;

namespace TabloidFullStack.Repositories
{
    public interface IUserProfileRepository
    {
        List<UserProfile> GetAll();
    }
}