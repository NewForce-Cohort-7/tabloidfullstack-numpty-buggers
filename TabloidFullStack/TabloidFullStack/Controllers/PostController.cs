using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.VisualBasic;
using System.Security.Claims;
using TabloidFullStack.Models;
using TabloidFullStack.Repositories;

namespace TabloidFullStack.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostController : ControllerBase
    {
        private readonly IPostRepository _postRepository;

        public PostController(IPostRepository postRepository)
        {
            _postRepository = postRepository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var posts = _postRepository.GetAll().OrderByDescending(post => post.CreateDateTime);
            return Ok(posts);
        }

        [HttpGet("GetUsersPosts/{id}")]
        public IActionResult Get(int id) 
        {
            List<Post> posts = _postRepository.GetPostsByUserId(id);
            if (posts == null)

            { return NotFound(); }

            return Ok(posts);
        }

        [HttpGet("{id}")]
        public IActionResult GetSinglePost(int id)
        {
            var post = _postRepository.GetById(id);
            if (post == null)
            {
                return NotFound();
            }
            return Ok(post);
        }

        [HttpPost]
        public IActionResult Post(Post post)
        {
            _postRepository.Add(post);
            return CreatedAtAction("Get", new { id = post.Id }, post);
        }


    }
}