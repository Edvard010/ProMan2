using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProMan2.Model
{
    public class ProjectComment
    {
        public long Id { get; set; }
        public string Message { get; set; }
        public DateTime CreatedDate { get; set; }
        public long ProjectId { get; set; }
        public virtual Project Project { get; set; }
    }
}
