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
    [Route("api/[controller]")]
    [ApiController]
    public class RegisterController : ControllerBase
    {        
        private UserService _userService;        

        public RegisterController(UserService userService)
        {
            _userService = userService;
        }


        [HttpPost]
        public void Register(RegisterDto register)
        {            
            _userService.Register(register);
        }
    }
}
