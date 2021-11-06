using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ProMan2.Dto;
using ProMan2.Model;
using ProMan2.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProMan2.Controllers
{
    //[Authorize]
    [Route("api/project")]
    [ApiController]
    public class CommentController : ControllerBase

    {
        private ProjectService _projectService;
        public CommentController(ProjectService projectService)
        {
            _projectService = projectService;
        }

        

        [HttpGet("{id}/comment")]
        public IEnumerable<CommentDto> GetAll(long id)
        {
            return _projectService.GetAllComments(id);
        }

        [HttpPost("{id}/comment")]
        public void Create(NewCommentDto comment, [FromRoute] long id)
        {
            _projectService.AddComment(comment, id);
        }

        [HttpDelete("comment/{id}")]
        public void Remove(long id)
        {
            _projectService.RemoveComment(id);
        }

        [HttpPut("comment/{id}")]
        public void Edit(long id, [FromBody]CommentChangesDto commentChanges)
        {
            _projectService.EditComment(id, commentChanges);
        }
        
    }
}
