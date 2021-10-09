using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Threading.Tasks;

namespace ProMan2.Model
{
    public class Project
    {
        public Project()
        {
            Tasks = new Collection<ProjectTask>();
            Comments = new Collection<ProjectComment>();
        }
        public long Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Pricing { get; set; }
        public DateTime Deadline { get; set; }
        public ProjectStatus Status { get; set; }
        public long? ClientId { get; set; } //klasa Client, atrybut z klasy Client: Id
        public virtual Client Client { get; set; }
        public ICollection<ProjectTask> Tasks { get; set; }
        public ICollection<ProjectComment> Comments { get; set; }
    }
}
