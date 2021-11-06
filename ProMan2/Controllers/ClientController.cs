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
        private ClientService _clientService;

        public ClientController(ClientService clientService)
        {
            _clientService = clientService;
        }

        [HttpGet]
        public IEnumerable<ClientItemDto> GetAll()
        {
            return _clientService.GetAll();
        }

        [HttpGet("{id}")]
        public ClientDetailsDto Get(long id)
        {
            return _clientService.Get(id);
        }

        [HttpPost]
        public IActionResult Create(NewClientDto client)
        {
            if (_clientService.Create(client) == true)
            {
                return Ok();
            }
            else
            {
                return BadRequest("Client with this email already exists");
            }
        }

        //public IActionResult Create2(NewClientDto client)
        //{
        //    try
        //    {
        //        _clientService.Create2(client);
        //        return Ok();
        //    }
        //    catch(Exception ex)
        //    {
        //        return BadRequest(ex.Message);
        //    }
            
        //}

        [HttpPut("{id}")]
        public void Change(long id, [FromBody]ClientChangesDto clientChanges)
        {
            _clientService.Change(id, clientChanges);
        } //DZIAŁA
    }        
}
