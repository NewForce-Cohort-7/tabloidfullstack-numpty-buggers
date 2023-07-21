using System.Collections.Generic;
using Microsoft.Extensions.Configuration;
using Microsoft.Data.SqlClient;
using TabloidFullStack.Models;
using TabloidFullStack.Repositories;
using TabloidFullStack.Utils;


namespace TabloidFullStackRepositories
{
    public class PostTagRepository : BaseRepository, IPostTagRepository
    {
        public PostTagRepository(IConfiguration config) : base(config) { }

        public List<Tag> GetAllPostsTags(int id) // i want all of the Tags assigned to a post. I need to list the tags. Find them by Id

        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                      SELECT tag.ID as TagId, tag.Name as TagName
                        FROM Post post
                        JOIN PostTag postTag on post.Id = postTag.PostId
                        JOIN Tag tag on tag.Id = postTag.TagId
                        WHERE post.ID = @id";
                    cmd.Parameters.AddWithValue("@id", id);
                    var reader = cmd.ExecuteReader();
                    var tags = new List<Tag>();
                    while (reader.Read())
                    {
                        tags.Add(new Tag()
                        {
                            Id = reader.GetInt32(reader.GetOrdinal("TagId")),
                            Name = reader.GetString(reader.GetOrdinal("TagName"))
                        });
                    }
                    reader.Close();
                    return tags;
                }
            }
        }
            public void AddTagToPost(Post post, Tag tag)
            {
                using (SqlConnection conn = Connection)
                {
                    conn.Open();
                    using (SqlCommand cmd = conn.CreateCommand())
                    {
                        cmd.CommandText =
                            @"INSERT INTO PostTag (PostId, TagId)
                        OUTPUT INSERTED.Id
                        VALUES (@postId, @tagId)";
                        cmd.Parameters.AddWithValue("@postId", post.Id);
                        cmd.Parameters.AddWithValue("@tagId", tag.Id);

                        cmd.ExecuteNonQuery();
                    }
                }
            }
        public void DeleteTagFromPost(int postId, int tagId)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText =
                        @"DELETE FROM PostTag WHERE PostId = @postId AND TagId = @tagId";
                    cmd.Parameters.AddWithValue("@postId", postId);
                    cmd.Parameters.AddWithValue("@tagId", tagId);

                    cmd.ExecuteNonQuery();
                }
            }
        }
    }

    }
}