using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.Extensions.Configuration;
using TabloidFullStack.Models;
using TabloidFullStack.Utils;


namespace TabloidFullStack.Repositories
{
    public class UserTypeRepository : BaseRepository, IUserTypeRepository
    {
        public UserTypeRepository(IConfiguration configuration) : base(configuration) { }

        public List<UserType> GetAll()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {

                    cmd.CommandText = @"
                        SELECT Id, [Name]
                        FROM UserType
                        ORDER BY [Name]";

                    var reader = cmd.ExecuteReader();

                    var userTypes = new List<UserType>();
                    while (reader.Read())
                    {
                        userTypes.Add(new UserType()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            Name = DbUtils.GetString(reader, "Name")
                        });
                    }

                    reader.Close();

                    return userTypes;
                }
            }
        }

        public UserType GetUserTypeById(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {

                    cmd.CommandText = @"
                        SELECT [Name]
                        FROM UserType
                        WHERE Id = @Id";

                    DbUtils.AddParameter(cmd, "@Id", id);

                    var reader = cmd.ExecuteReader();

                    UserType userType = null;
                    if (reader.Read())
                    {
                        userType = new UserType()
                        {
                            Id = id,
                            Name = DbUtils.GetString(reader, "Name")
                        };
                    }

                    reader.Close();

                    return userType;
                }
            }
        }

        public void Add(UserType userType)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {

                    cmd.CommandText = @"
                        INSERT INTO UserType ([Name])
                        OUTPUT INSERTED.ID
                        VALUES (@Name)";

                    DbUtils.AddParameter(cmd, "@Name", userType.Name);

                    userType.Id = (int)cmd.ExecuteScalar();
                }
            }
        }
    }
}
