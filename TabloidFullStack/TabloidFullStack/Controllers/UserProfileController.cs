using System;
using Microsoft.AspNetCore.Mvc;
using TabloidFullStack.Models;
using TabloidFullStack.Repositories;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TabloidFullStack.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserProfileController : ControllerBase
    {
        private readonly IUserProfileRepository _userProfileRepository;
        private readonly IUserRepository _userRepository;
    public UserProfileController(IUserRepository userRepository, IUserProfileRepository userProfileRepository)
    {
            _userProfileRepository = userProfileRepository;
            _userRepository = userRepository;
    }

    [HttpGet]
    public IActionResult Get()
        {
        return Ok(_userProfileRepository.GetAll());
    }

    [HttpGet("{id}")]
    public IActionResult Get(int id)
        {
        var userProfile = _userProfileRepository.GetUserProfileById(id);
        if (userProfile == null)
            {
            return NotFound();
        }
        return Ok(userProfile);
    }

    [HttpGet("GetByEmail")]
    public IActionResult GetByEmail(string email)
    {
        var user = _userRepository.GetByEmail(email);

        if (email == null || user == null)
        {
            return NotFound();
        }
        return Ok(user);
    }

    [HttpPost]
    public IActionResult Post(UserProfile userProfile)
    {
        userProfile.CreateDateTime = DateTime.Now;
        //Line 56 was hard coded in to always make it so that a new user will always be registered as an author. My react code makes it possible to register as either.
        //userProfile.UserTypeId = UserType.AUTHOR_ID;
        _userRepository.Add(userProfile);
        return CreatedAtAction(
            "GetByEmail",
            new { email = userProfile.Email },
            userProfile);
    }

    [HttpPut("{id}")]
    public IActionResult Put(int id, UserProfile userProfile)
        {
        if (id != userProfile.Id)
            {
            return BadRequest();
        }

        _userProfileRepository.Update(userProfile);
        return NoContent();
    }
}
}
