using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProMan2.Model
{
    public class ProManContext : DbContext
    {
        public ProManContext(DbContextOptions<ProManContext> options) : base(options)
        {

        }

        public DbSet<User> Users { get; set; }
        public DbSet<Project> Projects { get; set; }
        public DbSet<Client> Clients { get; set; }
        public DbSet<ProjectComment> Comments { get; set; }
        public DbSet<ProjectTask> Tasks { get; set; }
    }
}
