using System;
using Microsoft.AspNetCore.Mvc;
using TabloidFullStack.Repositories;
using TabloidFullStack.Models;

namespace TabloidFullStack.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly ICategoryRepository _categoryRepo;
        public CategoryController(ICategoryRepository categoryRepository)
        {
            _categoryRepo = categoryRepository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_categoryRepo.GetAll());
        }

        //[HttpGet("{id}")]
        //public IActionResult Get(int id)
        //{
        //    var category = _categoryRepo.GetById(id);
        //    if (category == null)
        //    {
        //        return NotFound();
        //    }
        //    return Ok(category);
        //}
    }
}
