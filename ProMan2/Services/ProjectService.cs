using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using ProMan2.Dto;
using ProMan2.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProMan2.Services
{
    public class ProjectService
    {
        private readonly ProManContext _context;
        private readonly IConfiguration _config;

        public ProjectService(ProManContext context, IConfiguration configuration)
        {
            _config = configuration;
            _context = context;
        }

        public long Create(NewProjectDto project)
        {
            var newProject = new Project
            {
                Name = project.Name,
                Description = project.Description,
                Pricing = project.Pricing,
                Deadline = DateTime.ParseExact(project.Deadline, "dd-MM-yyyy", null),
                Status = ProjectStatus.New
            };

            if (project.ClientId != 0)
            {
                var client = _context.Clients.SingleOrDefault(x => x.Id == project.ClientId);
                client.Projects.Add(newProject);
            }
            else
            {
                _context.Projects.Add(newProject);
            }
            _context.SaveChanges();
            return newProject.Id;
        }

        public IEnumerable<ProjectItemDto> GetAll()
        {
            return _context.Projects.Include(x => x.Client).ToList().Select(x => new ProjectItemDto
            {
                Id = x.Id,
                Name = x.Name,
                Status = x.Status.ToString(),
                Deadline = x.Deadline.ToString("dd-MM-yyyy"),
                Pricing = x.Pricing,
                Description = x.Description,
                ClientId = x.ClientId,
                Client = x.Client != null ? x.Client.Name : string.Empty
            });

        }

        public ProjectDetailsDto Get(long id)
        {
            var project = _context.Projects.Include(x => x.Client).SingleOrDefault(x => x.Id == id); 
            return new ProjectDetailsDto
            {
                Id = project.Id,
                Description = project.Description,
                Name = project.Name,
                Pricing = project.Pricing,
                Status = project.Status.ToString(),
                ClientId = project.ClientId,
                Deadline = project.Deadline.ToString("dd-MM-yyyy"),
                Client = project.Client != null ? project.Client.Name : string.Empty
            };
        }

        public void Finish(long id)
        {
            var project = _context.Projects.Include(x => x.Client).SingleOrDefault(x => x.Id == id);
            project.Status = ProjectStatus.Finished;
            _context.SaveChanges();
        }

        public void EditProject(long id, ProjectChangesDto projectChanges)
        {
            var project = _context.Projects.SingleOrDefault(x => x.Id == id);
            if (project != null)
            {
                project.Name = projectChanges.Name;
                project.Description = projectChanges.Description;
                project.Pricing = projectChanges.Pricing;
            }
            else
            {
                return;
            }
            _context.SaveChanges();
        }

        public void RemoveProject(long id)
        {
            var project = _context.Projects.Single(x => x.Id == id);
            _context.Projects.Remove(project);
            _context.SaveChanges();
        }

        public void AddComment(NewCommentDto comment, long id)
        {
            var newComment = new ProjectComment
            {
                ProjectId = comment.ProjectId,
                Message = comment.Message,
                CreatedDate = DateTime.Now,
            };
            var project = _context.Projects.Single(x => x.Id == id);
            project.Comments.Add(newComment);

            _context.SaveChanges();
        }

        public void RemoveComment(long id)
        {
            var comment = _context.Comments.Single(x => x.Id == id);
            _context.Comments.Remove(comment);
            _context.SaveChanges();
        }

        public void EditComment(long id, CommentChangesDto commentChanges)
        {
            var comment = _context.Comments.SingleOrDefault(x => x.Id == id);
            if (comment != null)
            {
                comment.Message = commentChanges.Message;
            }
            else
            {
                return;
            }
            _context.SaveChanges();
        }
    

        public IEnumerable<CommentDto> GetAllComments(long projectId)
        {
            return _context.Comments.Where(x => x.ProjectId == projectId).ToList()
                .Select(x => new CommentDto
                {
                    Id = x.Id,
                    Message = x.Message,
                    Date = x.CreatedDate.ToString("dd-MM-yyyy")
                });
        }

        public void AddTask(NewTaskDto task, long id)
        {
            var newTask = new ProjectTask
            {
                Title = task.Title,
                Description = task.Description,
                Status = Model.TaskStatus.New,
                CreatedDate = DateTime.Now,
                Deadline = DateTime.ParseExact(task.Date, "dd-MM-yyyy", null)
            };

            var project = _context.Projects.Single(x => x.Id == id);
            project.Tasks.Add(newTask);

            _context.SaveChanges();
        }

        public void ChangeTaskStatus(TaskStatusDto status)
        {
            var task = _context.Tasks.Single(x => x.Id == status.Id);
            task.Status = Enum.Parse<Model.TaskStatus>(status.Status);
            _context.SaveChanges();
        }

        public IEnumerable<TaskDto> GetAllTasks(long projectId)
        {
            return _context.Tasks.Include(x => x.Project).Where(x => x.ProjectId == projectId).ToList()
                .Select(x => new TaskDto
                {
                    Title = x.Title,
                    Date = x.Deadline.ToString("dd-MM-yyyy"),
                    Status = x.Status.ToString(),
                    ProjectName = x.Project.Name,
                    ProjectId = x.ProjectId
                });
            //return new List<TaskDto>
            //{
            //    new TaskDto
            //    {
            //        ProjectId = 1,
            //        ProjectName = "Projekt 1",
            //        Number = 1,
            //        Status = "New",
            //        Title = "Zadanie 1",
            //        Date = "26-12-2020"
            //    },
            //    new TaskDto
            //    {
            //        ProjectId = 1,
            //        ProjectName = "Projekt 1",
            //        Number = 2,
            //        Status = "InProgress",
            //        Title = "Zadanie 2",
            //        Date = "26-12-2020"
            //    },
            //    new TaskDto
            //    {
            //        ProjectId = 1,
            //        ProjectName = "Projekt 1",
            //        Number = 3,
            //        Status = "Done",
            //        Title = "Zadanie 3",
            //        Date = "02-01-2020"
            //    },
            //};
        }

        public IEnumerable<TaskItemDto> GetTaskBetween(string from, string to)
        {
            var fromDate = DateTime.ParseExact(from, "dd-MM-yyyy", null);
            var toDate = DateTime.ParseExact(to, "dd-MM-yyyy", null);

            return _context.Tasks.Include(x => x.Project).Where(x => x.Deadline >= fromDate && x.Deadline <= toDate).ToList()
                .Select(x => new TaskItemDto
                {
                    Title = x.Title,
                    Date = x.Deadline.ToString("dd-MM-yyyy"),
                    ProjectId = x.ProjectId,
                    ProjectName = x.Project.Name,
                    Status = x.Status.ToString(),
                    Number = x.Id
                });
        }

        public void RemoveTask(long id)
        {
            var task = _context.Tasks.Single(x => x.Id == id);
            _context.Tasks.Remove(task);
            _context.SaveChanges();
        }

        public IEnumerable<ProjectStatisticDto> GetStatistic()
        {
            return _context.Projects.Include(x => x.Client).Include(x => x.Tasks).ToList()
                .Select(x => new ProjectStatisticDto
                {
                    ProjectName = x.Name,
                    ClientName = x.Client != null ? x.Client.Name : string.Empty,
                    New = x.Tasks.Count(t => t.Status == Model.TaskStatus.New),
                    InProgress = x.Tasks.Count(t => t.Status == Model.TaskStatus.InProgress),
                    Finished = x.Tasks.Count(t => t.Status == Model.TaskStatus.Done)
                });
        }
    }
}
