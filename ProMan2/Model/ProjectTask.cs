using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProMan2.Model
{
    public class ProjectTask
    {
        public long Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime Deadline { get; set; }
        public DateTime CreatedDate { get; set; }
        public TaskStatus Status { get; set; }
        public long ProjectId { get; set; }
        public virtual Project Project { get; set; }
    }
}
