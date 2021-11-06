using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ProMan2.Dto
{
    public class RegisterDto
    {
        
        [MinLength(2, ErrorMessage = "Name must be at least 2 characters")]
        public string Name { get; set; }
        public string Password { get; set; }
    }
}
