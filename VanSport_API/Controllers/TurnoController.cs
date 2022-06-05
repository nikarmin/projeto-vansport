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
    public class TurnoController : Controller
    {
        private readonly VanSportContext _context;

        public TurnoController(VanSportContext context){
            _context = context;
        }

        [HttpGet]
        public ActionResult<List<Turno>> GetAll() {
            return _context.Turno.ToList();
        }

        [HttpGet("{TurnoId}")]
        public ActionResult<List<Turno>> Get(int TurnoId){
            try
            {
                var result = _context.Turno.Find(TurnoId);
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
        public async Task<ActionResult> post(Turno model){
            try
            {
                _context.Turno.Add(model);
                
                if (await _context.SaveChangesAsync() == 1)
                {
                    return Created($"/api/turno/{model.nomeTurno}", model);
                }
            }
            catch{
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados.");
            }

            return BadRequest();
        }

        [HttpPut("{TurnoId}")]
        public async Task<ActionResult> put(int TurnoId, Turno dadosTurnoAlt){
            try{
                var result = await _context.Turno.FindAsync(TurnoId);
                if (TurnoId != result.idTurno)
                {
                    return BadRequest();
                }
                result.nomeTurno = dadosTurnoAlt.nomeTurno;
                await _context.SaveChangesAsync();
                return Created($"/api/turno/{dadosTurnoAlt.nomeTurno}", dadosTurnoAlt);
            }
            catch{
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados.");
            }
        }

        [HttpDelete("{TurnoId}")]
        public async Task<ActionResult> delete(int TurnoId){
            try{
                var turno = await _context.Turno.FindAsync(TurnoId);
                
                if(turno == null)
                {
                    return NotFound();
                }
                
                _context.Remove(turno);
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