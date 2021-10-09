using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProMan2.Dto
{
    public class ClientDetailsDto
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Address { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public IEnumerable<ProjectItemDto> Projects { get; set; }


    }
}
