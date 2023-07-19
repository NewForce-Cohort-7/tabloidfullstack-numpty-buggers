using Microsoft.AspNetCore.Mvc;
using TabloidFullStack.Repositories;

namespace TabloidFullStack.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CommentController : ControllerBase
    {
        private readonly ICommentRepository _commentRepository;
        //private readonly IPostRepository _postRepositroy;
        public CommentController(ICommentRepository commentRepository)
        {
            _commentRepository = commentRepository;
        }

        [HttpGet("GetCommentsByPostId")]
        public IActionResult GetCommentsByPostId(int id)
        {
            var comments = _commentRepository.GetCommentsByPostId(id);

            if (id == null || comments == null)
            {
                return NotFound();
            }
            return Ok(comments);
        }
    }
}
