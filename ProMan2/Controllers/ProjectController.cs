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
    [Route("api/[controller]")]
    [ApiController]
    public class ProjectController : ControllerBase
    {
        private readonly ProManContext _context;
        private ProjectService projectService;
        public ProjectController(ProManContext context)
        {
            _context = context;
            projectService = new ProjectService(_context);
        }
        

        [HttpGet("{id}")]
        public ProjectDetailsDto GetDetails(long id)
        {
            return projectService.Get(id);
        }

        [HttpPost]
        public long CreateProject([FromBody] NewProjectDto project)
        {
            return projectService.Create(project);
        }

        [HttpGet]
        public IEnumerable<ProjectItemDto> GetAll()
        {
            return projectService.GetAll();
        }

        [HttpPut("{id}/finish")]
        public void Finish(long id)
        {
            projectService.Finish(id);
        }

        [HttpGet("statistics")]
        public IEnumerable<ProjectStatisticDto> GetStatistic()
        {
            return projectService.GetStatistic();
        }
    }
}
