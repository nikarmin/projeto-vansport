using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using VanSport_API.Data;
using VanSport_API.models;

namespace VanSport_API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MotoristaController : Controller
    {
        private readonly VanSportContext _context;

        public MotoristaController(VanSportContext context){
            _context = context;
        }

        [HttpGet]
        public ActionResult<List<Motorista>> GetAll() {
            return _context.Motorista.ToList();
        }

        [HttpGet("{MotoristaId}")]
        public ActionResult<List<Turno>> Get(int MotoristaId){
            try
            {
                var result = _context.Motorista.Find(MotoristaId);
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
        public async Task<ActionResult> post(Motorista model){
            try
            {
                _context.Motorista.Add(model);
                
                if (await _context.SaveChangesAsync() == 1)
                {
                    return Created($"/api/motorista/{model.cpf}", model);
                }
            }
            catch{
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados.");
            }

            return BadRequest();
        }

        [HttpPut("{MotoristaId}")]
        public async Task<ActionResult> put(int MotoristaId, Motorista dadosMotoristaAlt){
            try{
                var result = await _context.Motorista.FindAsync(MotoristaId);
                if (MotoristaId != result.idMotorista)
                {
                    return BadRequest();
                }
                result.cep = dadosMotoristaAlt.cep;
                result.cpf = dadosMotoristaAlt.cpf;
                result.email = dadosMotoristaAlt.email;
                result.foto = dadosMotoristaAlt.foto;
                result.nome = dadosMotoristaAlt.nome;
                result.numero = dadosMotoristaAlt.numero;
                result.numeroCelular = dadosMotoristaAlt.numeroCelular;
                result.senha = dadosMotoristaAlt.senha;
                result.idCidade = dadosMotoristaAlt.idCidade;
                result.idSexo = dadosMotoristaAlt.idSexo;
                await _context.SaveChangesAsync();
                return Created($"/api/turno/{dadosMotoristaAlt.cpf}", dadosMotoristaAlt);
            }
            catch{
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados.");
            }
        }

        [HttpDelete("{MotoristaId}")]
        public async Task<ActionResult> delete(int MotoristaId){
            try{
                var motorista = await _context.Motorista.FindAsync(MotoristaId);
                
                if(motorista == null)
                {
                    return NotFound();
                }
                
                _context.Remove(motorista);
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