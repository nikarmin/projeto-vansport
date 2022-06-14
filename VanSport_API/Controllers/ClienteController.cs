using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using VanSport_API.Data;
using VanSport_API.models;
using System;

namespace VanSport_API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ClienteController : Controller
    {
        private readonly VanSportContext _context;

        public ClienteController(VanSportContext context){
            _context = context;
        }

        [HttpGet]
        public ActionResult<List<Cliente>> GetAll() {
            return _context.Cliente.ToList();
        }

        [HttpGet("{ClienteId}")]
        public ActionResult<List<Turno>> Get(int ClienteId){
            try
            {
                var result = _context.Cliente.Find(ClienteId);
                if (result == null)
                {
                    return NotFound();
                }
                return Ok(result);
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados.");
            }
        }
        
        [HttpPost]
        public async Task<ActionResult> post(Cliente model){
            try
            {
                _context.Cliente.Add(model);
                
                if (await _context.SaveChangesAsync() == 1)
                {
                    return Created($"/api/cliente/{model.cpf}", model);
                }
            }
            catch{
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados.");
            }

            return BadRequest();
        }

        [HttpPut("{ClienteId}")]
        public async Task<ActionResult> put(int ClienteId, Cliente dadosClienteAlt){
            try{
                var result = await _context.Cliente.FindAsync(ClienteId);
                if (ClienteId != result.idCliente)
                {
                    return BadRequest();
                }
                result.cep = dadosClienteAlt.cep;
                result.cpf = dadosClienteAlt.cpf;
                result.email = dadosClienteAlt.email;
                result.foto = dadosClienteAlt.foto;
                result.nome = dadosClienteAlt.nome;
                result.numero = dadosClienteAlt.numero;
                result.numeroCelular = dadosClienteAlt.numeroCelular;
                result.senha = dadosClienteAlt.senha;
                result.idCidade = dadosClienteAlt.idCidade;
                result.idSexo = dadosClienteAlt.idSexo;
                result.idTurno = dadosClienteAlt.idTurno;
                await _context.SaveChangesAsync();
                return Created($"/api/cliente/{dadosClienteAlt.cpf}", dadosClienteAlt);
            }
            catch{
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados.");
            }
        }

        [HttpDelete("{ClienteId}")]
        public async Task<ActionResult> delete(int ClienteId){
            try{
                var Cliente = await _context.Cliente.FindAsync(ClienteId);
                
                if(Cliente == null)
                {
                    return NotFound();
                }
                
                _context.Remove(Cliente);
                await _context.SaveChangesAsync();
                return NoContent();
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados.");
            }
        }
    }
}