using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
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
    public class TaskController : ControllerBase
    {
        private readonly ProManContext _context;
        private ProjectService projectService;
        public TaskController(ProManContext context)
        {
            _context = context;
            projectService = new ProjectService(_context);
        }
        

        [HttpGet("{id}/task")]
        public IEnumerable<TaskDto> GetAll(long id)
        {
            return projectService.GetAllTasks(id);
        }

        [HttpPost("{id}/task")]
        public void Create(NewTaskDto task, [FromRoute]long id)
        {
            projectService.AddTask(task, id);
        }

        [HttpPut("task/{id}")]
        public void ChangeStatus(TaskStatusDto status)
        {
            projectService.ChangeTaskStatus(status);
        }

        [HttpGet("task/between")]
        public IEnumerable<TaskItemDto> GetBetween(string from, string to)
        {
            return projectService.GetTaskBetween(from, to);
        }
    }
}
