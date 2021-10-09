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
        private readonly ProManContext _context;
        private UserService userService;        

        public RegisterController(ProManContext context, IConfiguration configuration)
        {
            _context = context;
            userService = new UserService(_context, configuration);
        }


        [HttpPost]
        public void Register(RegisterDto register)
        {
            userService.Register(register);
        }
    }
}
