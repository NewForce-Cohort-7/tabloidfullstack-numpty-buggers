using System;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TabloidFullStack.Models;
using TabloidFullStack.Repositories;

namespace TabloidFullStack.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserTypeController : ControllerBase
    {
        private readonly IUserTypeRepository _userTypeRepository;
        public UserTypeController(IUserTypeRepository userTypeRepository)
        {
            _userTypeRepository = userTypeRepository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_userTypeRepository.GetAll());
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var userType = _userTypeRepository.GetUserTypeById(id);
            if (userType == null)
            {
                return NotFound();
            }
            return Ok(userType);
        }

        [HttpPost]
        public IActionResult Post(UserType userType)
        {
            _userTypeRepository.Add(userType);
            return CreatedAtAction("Get", new { id = userType.Id }, userType);
        }
    }
}
