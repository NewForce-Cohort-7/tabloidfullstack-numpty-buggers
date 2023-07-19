using System;
using System.Linq;
using System.Collections.Generic;
using Microsoft.Extensions.Configuration;
using TabloidFullStack.Models;
using TabloidFullStack.Utils;

namespace TabloidFullStack.Repositories
{
    public class PostRepository : BaseRepository, IPostRepository
    {
        public PostRepository(IConfiguration configuration) : base(configuration) { }

        public List<Post> GetAll()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"

                        SELECT p.Id AS PId, p.Title, p.Content, p.ImageLocation AS PImage, p.CreateDateTime AS PCreateDate, p.PublishDateTime, p.IsApproved, p.CategoryId, p.UserProfileId, up.Id AS UId, up.DisplayName, up.FirstName, up.LastName, up.Email, up.CreateDateTime AS UPCreateDate, up.ImageLocation AS UPImage, up.UserTypeId, c.Id AS CId, c.[Name] FROM Post p                        
                        LEFT JOIN UserProfile up ON up.Id = p.UserProfileId  
                        LEFT JOIN Category c ON p.CategoryId = c.Id
                        ORDER BY p.CreateDateTime";

                    var reader = cmd.ExecuteReader();

                    var posts = new List<Post>();
                    while (reader.Read())
                    {
                        posts.Add(new Post()
                        {
                            Id = DbUtils.GetInt(reader, "PId"),
                            Title = DbUtils.GetString(reader, "Title"),
                            Content = DbUtils.GetString(reader, "Content"),
                            ImageLocation = DbUtils.GetString(reader, "PImage"),
                            CreateDateTime = DbUtils.GetDateTime(reader, "PCreateDate"),
                            PublishDatetime = DbUtils.GetDateTime(reader, "PublishDateTime"),
                            UserProfileId = DbUtils.GetInt(reader, "UserProfileId"),
                            UserProfile = new UserProfile()
                            {
                                Id = DbUtils.GetInt(reader, "UId"),
                                DisplayName = DbUtils.GetString(reader, "DisplayName"),
                                FirstName = DbUtils.GetString(reader, "FirstName"),
                                LastName = DbUtils.GetString(reader, "LastName"),
                                Email = DbUtils.GetString(reader, "Email"),
                                CreateDateTime = DbUtils.GetDateTime(reader, "UPCreateDate"),
                                ImageLocation = DbUtils.GetString(reader, "UPImage"),
                                UserTypeId = DbUtils.GetInt(reader, "UserTypeId")

                            },
                            Category = new Category()
                            {
                                Id = DbUtils.GetInt(reader, "CId"),
                                Name = DbUtils.GetString(reader, "Name")
                            }
                        });
                    }

                    reader.Close();

                    return posts;
                }
            }
        }

        public List<Post> GetPostsByUserId(int userProfileId)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"

                        SELECT p.Id AS PId, p.Title, p.Content, p.ImageLocation AS PImage, p.CreateDateTime AS PCreateDate, p.PublishDateTime, p.IsApproved, p.CategoryId, p.UserProfileId, up.Id AS UId, up.DisplayName, up.FirstName, up.LastName, up.Email, up.CreateDateTime AS UPCreateDate, up.ImageLocation AS UPImage, up.UserTypeId, c.Id AS CId, c.[Name] FROM Post p                        
                        LEFT JOIN UserProfile up ON up.Id = p.UserProfileId  
                        LEFT JOIN Category c ON p.CategoryId = c.Id
                        Where p.UserProfileId = @userProfileId
                        ORDER BY p.CreateDateTime";

                    cmd.Parameters.AddWithValue("@userProfileId", userProfileId);
                    var reader = cmd.ExecuteReader();

                    var posts = new List<Post>();

                    while (reader.Read())
                    {
                        posts.Add(new Post()
                        {
                            Id = DbUtils.GetInt(reader, "PId"),
                            Title = DbUtils.GetString(reader, "Title"),
                            Content = DbUtils.GetString(reader, "Content"),
                            ImageLocation = DbUtils.GetString(reader, "PImage"),
                            CreateDateTime = DbUtils.GetDateTime(reader, "PCreateDate"),
                            PublishDatetime = DbUtils.GetDateTime(reader, "PublishDateTime"),
                            UserProfileId = DbUtils.GetInt(reader, "UserProfileId"),
                            UserProfile = new UserProfile()
                            {
                                Id = DbUtils.GetInt(reader, "UId"),
                                DisplayName = DbUtils.GetString(reader, "DisplayName"),
                                FirstName = DbUtils.GetString(reader, "FirstName"),
                                LastName = DbUtils.GetString(reader, "LastName"),
                                Email = DbUtils.GetString(reader, "Email"),
                                CreateDateTime = DbUtils.GetDateTime(reader, "UPCreateDate"),
                                ImageLocation = DbUtils.GetString(reader, "UPImage"),
                                UserTypeId = DbUtils.GetInt(reader, "UserTypeId")

                            },
                            Category = new Category()
                            {
                                Id = DbUtils.GetInt(reader, "CId"),
                                Name = DbUtils.GetString(reader, "Name")
                            }
                        });
                    }

                    reader.Close();

                    return posts;
                }
            }
        }

        //public Post GetById(int id)
        //{
        //    using (var conn = Connection)
        //    {
        //        conn.Open();
        //        using (var cmd = conn.CreateCommand())
        //        {
        //            cmd.CommandText = @"
        //                  SELECT p.Title, p.Caption, p.DateCreated, p.ImageUrl, p.UserProfileId, u.Id AS UId, u.[Name], u.Email, u.ImageUrl, u.DateCreated
        //                    FROM Post p
        //                    LEFT JOIN UserProfile u ON u.Id = p.UserProfileId                            
        //                  WHERE p.Id = @id";

        //            DbUtils.AddParameter(cmd, "@id", id);

        //            var reader = cmd.ExecuteReader();

        //            Post post = null;
        //            if (reader.Read())
        //            {
        //                post = new Post()
        //                {
        //                    Id = id,
        //                    Title = DbUtils.GetString(reader, "Title"),
        //                    Caption = DbUtils.GetString(reader, "Caption"),
        //                    DateCreated = DbUtils.GetDateTime(reader, "DateCreated"),
        //                    ImageUrl = DbUtils.GetString(reader, "ImageUrl"),
        //                    UserProfileId = DbUtils.GetInt(reader, "UserProfileId"),
        //                    UserProfile = new UserProfile
        //                    {
        //                        Id = DbUtils.GetInt(reader, "UId"),
        //                        Name = DbUtils.GetString(reader, "Name"),
        //                        Email = DbUtils.GetString(reader, "Email"),
        //                        ImageUrl = DbUtils.GetString(reader, "ImageUrl"),
        //                        DateCreated = DbUtils.GetDateTime(reader, "DateCreated")
        //                    }
        //                };
        //            }

        //            reader.Close();

        //            return post;
        //        }
        //    }
        //}

        //public void Add(Post post)
        //{
        //    using (var conn = Connection)
        //    {
        //        conn.Open();
        //        using (var cmd = conn.CreateCommand())
        //        {
        //            cmd.CommandText = @"
        //                INSERT INTO Post (Title, Caption, DateCreated, ImageUrl, UserProfileId)
        //                OUTPUT INSERTED.ID
        //                VALUES (@Title, @Caption, @DateCreated, @ImageUrl, @UserProfileId)";

        //            DbUtils.AddParameter(cmd, "@Title", post.Title);
        //            DbUtils.AddParameter(cmd, "@Caption", post.Caption);
        //            DbUtils.AddParameter(cmd, "@DateCreated", post.DateCreated);
        //            DbUtils.AddParameter(cmd, "@ImageUrl", post.ImageUrl);
        //            DbUtils.AddParameter(cmd, "@UserProfileId", post.UserProfileId);

        //            post.Id = (int)cmd.ExecuteScalar();
        //        }
        //    }
        //}

        //public void Update(Post post)
        //{
        //    using (var conn = Connection)
        //    {
        //        conn.Open();
        //        using (var cmd = conn.CreateCommand())
        //        {
        //            cmd.CommandText = @"
        //                UPDATE Post
        //                   SET Title = @Title,
        //                       Caption = @Caption,
        //                       DateCreated = @DateCreated,
        //                       ImageUrl = @ImageUrl,
        //                       UserProfileId = @UserProfileId
        //                 WHERE Id = @Id";

        //            DbUtils.AddParameter(cmd, "@Title", post.Title);
        //            DbUtils.AddParameter(cmd, "@Caption", post.Caption);
        //            DbUtils.AddParameter(cmd, "@DateCreated", post.DateCreated);
        //            DbUtils.AddParameter(cmd, "@ImageUrl", post.ImageUrl);
        //            DbUtils.AddParameter(cmd, "@UserProfileId", post.UserProfileId);
        //            DbUtils.AddParameter(cmd, "@Id", post.Id);

        //            cmd.ExecuteNonQuery();
        //        }
        //    }
        //}

        //public void Delete(int id)
        //{
        //    using (var conn = Connection)
        //    {
        //        conn.Open();
        //        using (var cmd = conn.CreateCommand())
        //        {
        //            cmd.CommandText = "DELETE FROM Post WHERE Id = @Id";
        //            DbUtils.AddParameter(cmd, "@id", id);
        //            cmd.ExecuteNonQuery();
        //        }
        //    }
        //}

    }
}
