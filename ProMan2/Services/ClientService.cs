using Microsoft.EntityFrameworkCore;
using ProMan2.Dto;
using ProMan2.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProMan2.Services
{
    public class ClientService
    {
        private readonly ProManContext _context;

        public ClientService(ProManContext context)
        {
            _context = context;
        }

        public long Create(NewClientDto client)
        {
            var newClient = new Client
            {
                Name = client.Name,
                Phone = client.Phone,
                Address = client.Address,
                Description = client.Description,
                Email = client.Email,
            };
            _context.Clients.Add(newClient);
            _context.SaveChanges();

            return newClient.Id;
        }

        public IEnumerable<ClientItemDto> GetAll()
        {
            //var clients = new List<ClientItemDto>();
            //var allclients = _context.Clients.ToList();
            //if (allclients?.Any() == true)
            //{
            //    foreach (var client in allclients)
            //    {
            //        clients.Add(new ClientItemDto
            //        {
            //            Name = client.Name,
            //            Email = client.Email,
            //            Id = client.Id,
            //            Phone = client.Phone,

            //        });
            //    }
            //}
            //return clients; //CHYBA, NIE WIEM CZY TO OK

            return _context.Clients.Include(x => x.Projects).ToList().Select(x => new ClientItemDto
            {
                Id = x.Id,
                Name = x.Name,
                Email = x.Email,
                Phone = x.Phone,                
            });


        }

        public ClientDetailsDto Get(long id)
        {
            var client = _context.Clients.Include(x => x.Projects).SingleOrDefault(x => x.Id == id);

            if (client == null)
            {
                return null;
            }

            return new ClientDetailsDto
            {
                Id = client.Id,
                Name = client.Name,
                Email = client.Email,
                Phone = client.Phone,
                Address = client.Address,
                Description = client.Description,
                Projects = client.Projects.Select(p => new ProjectItemDto
                {
                    Id = p.Id,
                    Name = p.Name,
                    Description = p.Description,
                    Status = p.Status.ToString(),
                    Pricing = p.Pricing,
                    Deadline = p.Deadline.ToString("dd-MM-yyyy")
                })
            };
        }
    }
}

