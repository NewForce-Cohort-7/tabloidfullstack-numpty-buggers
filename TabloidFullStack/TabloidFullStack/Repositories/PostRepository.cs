﻿using System;
using System.Linq;
using System.Collections.Generic;
using Microsoft.Extensions.Configuration;
using TabloidFullStack.Models;
using TabloidFullStack.Utils;
using Microsoft.Extensions.Hosting;
using System.Diagnostics.Metrics;

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

        public Post GetById(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT p.Id AS PId, p.Title, p.Content, p.ImageLocation AS PImage, p.CreateDateTime AS PCreateDate, p.PublishDateTime, p.IsApproved, p.CategoryId, p.UserProfileId, 
                up.Id AS UId, up.DisplayName, up.FirstName, up.LastName, up.Email, up.CreateDateTime AS UPCreateDate, up.ImageLocation AS UPImage, up.UserTypeId, 
                pt.Id as PostTagId, pt.PostId as PostTagPostId, pt.TagId as PostTagTagId,
                t.Id AS TagId, t.Name
                FROM Post p                        
                LEFT JOIN UserProfile up ON up.Id = p.UserProfileId  
                LEFT JOIN PostTag pt on pt.PostId = p.Id
                LEFT JOIN Tag t on t.Id = pt.TagId
                WHERE p.Id = @id";

                    DbUtils.AddParameter(cmd, "@id", id);

                    var reader = cmd.ExecuteReader();

                    Post post = null;
                    if (reader.Read())
                    {
                        post = new Post()
                        {
                            Id = id,
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

                            Tags = new List<Tag>()
                        };
                    }

                    if (DbUtils.IsNotDbNull(reader, "TagId") && !post.Tags.Any(x => x.Id == DbUtils.GetNullableInt(reader, "TagId")))
                    {
                        post.Tags.Add(new Tag
                        {
                            Id = DbUtils.GetInt(reader, "TagId"),
                            Name = DbUtils.GetString(reader, "Name"),
                        });
                 
                    }
            
                reader.Close();

                return post;
            }
        }
    }

        public void Add(Post post)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        INSERT INTO Post (Title, Content, ImageLocation, CreateDateTime, PublishDateTime, IsApproved, CategoryId, UserProfileId)
                        OUTPUT INSERTED.ID
                        VALUES (@title, @content, @imageLocation, @createDateTime, @publishDateTime, @isApproved, @categoryId, @UserProfileId)";
                    DbUtils.AddParameter(cmd, "@title", post.Title);
                    DbUtils.AddParameter(cmd, "@content", post.Content);
                    DbUtils.AddParameter(cmd, "@imageLocation", post.ImageLocation);
                    DbUtils.AddParameter(cmd, "@createDateTime", post.CreateDateTime);
                    DbUtils.AddParameter(cmd, "@publishDateTime", post.PublishDatetime);
                    DbUtils.AddParameter(cmd, "@isApproved", post.IsApproved);
                    DbUtils.AddParameter(cmd, "@categoryId", post.CategoryId);
                    DbUtils.AddParameter(cmd, "@UserProfileId", post.UserProfileId);
                    post.Id = (int)cmd.ExecuteScalar();
                }
            }
        }

        public void Delete(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = "DELETE FROM Post WHERE Id = @Id";
                    DbUtils.AddParameter(cmd, "@id", id);
                    cmd.ExecuteNonQuery();
                }
            }
        }

        //This is how I made a cascade delete to delete every comment associated with the post I was deleting

        //ALTER TABLE[Comment]
        //DROP CONSTRAINT IF EXISTS[FK_Comment_Post];

        //ALTER TABLE[Comment]
        //ADD CONSTRAINT[FK_Comment_Post]
        //FOREIGN KEY([PostId]) REFERENCES[Post] ([Id]) ON DELETE CASCADE;

        //SELECT* FROM Comment
        public void Update(Post post)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        UPDATE Post
                           SET Title = @Title,
                               Content = @Content,
                               ImageLocation = @ImageLocation,
                               CreateDateTime = @CreateDateTime,
                               PublishDatetime = @PublishDateTime,
                               IsApproved = @IsApproved,
                               CategoryId = @CategoryId,
                               UserProfileId = @UserProfileId

                         WHERE Id = @Id";

                    DbUtils.AddParameter(cmd, "@Title", post.Title);
                    DbUtils.AddParameter(cmd, "@Content", post.Content);
                    DbUtils.AddParameter(cmd, "@ImageLocation", post.ImageLocation);
                    DbUtils.AddParameter(cmd, "@CreateDateTime", post.CreateDateTime);
                    DbUtils.AddParameter(cmd, "@PublishDateTime", post.PublishDatetime);
                    DbUtils.AddParameter(cmd, "@IsApproved", post.IsApproved);
                    DbUtils.AddParameter(cmd, "@CategoryId", post.CategoryId);
                    DbUtils.AddParameter(cmd, "@UserProfileId", post.UserProfileId);
                    DbUtils.AddParameter(cmd, "@Id", post.Id);

                    cmd.ExecuteNonQuery();
                }
            }
        }


    }
}
