using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProMan2.Dto
{
    public class TaskStatusDto
    {
        public long Id { get; set; }
        public string Status { get; set; }
        public long ProjectId { get; set; }
    }
}
