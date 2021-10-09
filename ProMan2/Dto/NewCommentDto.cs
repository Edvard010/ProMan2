using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProMan2.Dto
{
    public class NewCommentDto
    {
        public long ProjectId { get; set; }
        public string Message { get; set; }
    }
}
