using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using ProMan2.Dto;
using ProMan2.Model;
using ProMan2.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProMan2.Controllers
{
    [Route("api/user")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private UserService _userService;        

        public LoginController(UserService userService)
        {
            _userService = userService;
        }


        [HttpGet("exists")]
        public UsernameDto Exists(UsernameDto login)
        {
            return _userService.UserExists(login);
        }

        [HttpPost("login")]
        public IActionResult Login(LoginDto login)
        {
            if (_userService.Login(login) == true)
            {
                return Ok();
            }
            else
            {
                return BadRequest("login or password incorrect");
            }
        }

        //[HttpPost("login")]
        //public UserDto Login(LoginDto login)
        //{
        //    return _userService.Login(login);
        //}
    }
}
