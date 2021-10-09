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
        private readonly ProManContext _context;
        private ProjectService projectService;
        public CommentController(ProManContext context)
        {
            _context = context;
            projectService = new ProjectService(_context);
        }

        

        [HttpGet("{id}/comment")]
        public IEnumerable<CommentDto> GetAll(long id)
        {
            return projectService.GetAllComments(id);
        }

        [HttpPost("{id}/comment")]
        public void Create(NewCommentDto comment, [FromRoute] long id)
        {
            projectService.AddComment(comment, id);
        }

        [HttpDelete("comment/{id}")]
        public void Remove(long id)
        {
            projectService.RemoveComment(id);
        }
    }
}
