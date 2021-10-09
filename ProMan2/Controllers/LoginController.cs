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
        private readonly ProManContext _context;
        private UserService userService;        

        public LoginController(ProManContext context, IConfiguration configuration)
        {
            _context = context;
            userService = new UserService(_context, configuration);
        }


        [HttpGet("exists")]
        public UsernameDto Exists(UsernameDto login)
        {
            return userService.UserExists(login);
        }

        [HttpPost("login")]
        public UserDto Login(LoginDto login)
        {
            return userService.Login(login);
        }
    }
}
