using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProMan2.Dto
{
    public class ProjectDetailsDto
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public string Client { get; set; }
        public decimal Pricing { get; set; }
        public string Description { get; set; }
        public string Deadline { get; set; }
        public string Status { get; set; }
        public long? ClientId { get; set; }
    }
}
