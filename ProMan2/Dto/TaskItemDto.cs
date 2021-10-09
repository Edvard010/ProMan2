using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProMan2.Dto
{
    public class TaskItemDto
    {
        public long Number { get; set; }
        public string Title { get; set; }
        public string Date { get; set; }
        public string Status { get; set; }
        public string ProjectName { get; set; }
        public long ProjectId { get; set; }
    }
}
