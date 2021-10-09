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
    
    [Route("api/[controller]")]
    [ApiController]
    public class ClientController : ControllerBase
    {
        private readonly ProManContext _context;
        private ClientService clientService;

        public ClientController(ProManContext context)
        {
            _context = context;
            clientService = new ClientService(_context);
        }

        [HttpGet]
        public IEnumerable<ClientItemDto> GetAll()
        {
            return clientService.GetAll();
        }

        [HttpGet("{id}")]
        public ClientDetailsDto Get(long id)
        {
            return clientService.Get(id);
        }

        [HttpPost]
        public long Create(NewClientDto client)
        {
            return clientService.Create(client);
        }
    }        
}
