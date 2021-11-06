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
        private ProjectService _projectService;
        public ProjectController(ProjectService projectService)
        {
            _projectService = projectService;
        }
        

        [HttpGet("{id}")]
        public ProjectDetailsDto GetDetails(long id)
        {
            return _projectService.Get(id);
        }

        [HttpPost]
        public long CreateProject([FromBody] NewProjectDto project)
        {
            return _projectService.Create(project);
        }

        [HttpGet]
        public IEnumerable<ProjectItemDto> GetAll()
        {
            return _projectService.GetAll();
        }

        [HttpPut("{id}/finish")]
        public void Finish(long id)
        {
            _projectService.Finish(id);
        }

        [HttpGet("statistics")]
        public IEnumerable<ProjectStatisticDto> GetStatistic()
        {
            return _projectService.GetStatistic();
        }

        [HttpPut("{id}")]
        public void Edit(long id, ProjectChangesDto projectChanges)
        {
            _projectService.EditProject(id, projectChanges);
        }//działa
        
    }
}
