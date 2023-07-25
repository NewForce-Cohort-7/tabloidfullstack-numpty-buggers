using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Hosting;
using TabloidFullStack.Repositories;
using TabloidFullStack.Models;
using TabloidFullStackRepositories;

namespace TabloidFullStack.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostTagController : ControllerBase
    {
        private readonly IPostTagRepository _postTagRepository;
        public PostTagController(IPostTagRepository postTagRepository)
        {
            _postTagRepository = postTagRepository;
        }
        ////get all postTags
        //[HttpGet]
        //public IActionResult Get()
        //{
        //    return Ok(_postTagRepository.GetAllTags());
        //}

        //get a posts tags by id
        [HttpGet("{id}")]
        public IActionResult GetTagsForPost(int id)
        {
            var postsTags = _postTagRepository.GetAllPostsTags(id);
            if (postsTags == null)
            {
                return NotFound(); //if there are no tags
            }
            return Ok(postsTags); //if there are tags
        }


        //add a tag to a post
        [HttpPost]
        public IActionResult AddPostTag(PostTag postTag)
        {
            _postTagRepository.AddTagToPost(postTag);
            return CreatedAtAction("Get", new { id = postTag.Id }, postTag);
        }
        //delete a tag
        [HttpDelete("{id}")]
        public IActionResult DeletePostTag(int postId, int tagId)
        {
            _postTagRepository.DeleteTagFromPost(postId, tagId);
            return NoContent();
        }

    

    }
}
