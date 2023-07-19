using System;
using System.Linq;
using System.Collections.Generic;
using Microsoft.Extensions.Configuration;
using TabloidFullStack.Models;
using TabloidFullStack.Utils;

namespace TabloidFullStack.Repositories
{
    public class CategoryRepository : BaseRepository, ICategoryRepository
    {
        public CategoryRepository(IConfiguration configuration) : base(configuration) { }

        public List<Category> GetAll()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT Id, [Name]
                        FROM Category
                        ORDER BY [Name] ASC";

                    var reader = cmd.ExecuteReader();

                    var categories = new List<Category>();
                    while (reader.Read())
                    {
                        categories.Add(new Category()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            Name = DbUtils.GetString(reader, "Name")
                        });
                    }

                    reader.Close();

                    return categories;
                }
            }
        }

        //public Category GetById(int id)
        //{
        //    using (var conn = Connection)
        //    {
        //        conn.Open();
        //        using(var cmd = conn.CreateCommand())
        //        {
        //            cmd.CommandText = @"
        //                SELECT Id, [Name]
        //                FROM Category
        //                WHERE Id = @Id";

        //            DbUtils.AddParameter(cmd, "@Id", id);

        //            var reader = cmd.ExecuteReader();

        //            Category category = null;
        //            if (reader.Read())
        //            {
        //                category = new Category()
        //                {
        //                    Id = DbUtils.GetInt(reader, "Id"),
        //                    Name = DbUtils.GetString(reader, "Name")
        //                };
        //            }

        //            reader.Close();

        //            return category;
        //        }
        //    }
        //}
    }
}
