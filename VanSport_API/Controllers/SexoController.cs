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
    public class SexoController : Controller
    {
        private readonly VanSportContext _context;

        public SexoController(VanSportContext context){
            _context = context;
        }

        [HttpGet]
        public ActionResult<List<Sexo>> GetAll() {
            return _context.Sexo.ToList();
        }

        [HttpGet("{SexoId}")]
        public ActionResult<List<Sexo>> Get(int SexoId){
            try
            {
                var result = _context.Sexo.Find(SexoId);
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
        public async Task<ActionResult> post(Sexo model){
            try
            {
                _context.Sexo.Add(model);
                
                if (await _context.SaveChangesAsync() == 1)
                {
                    return Created($"/api/sexo/{model.sexo}", model);
                }
            }
            catch{
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados.");
            }

            return BadRequest();
        }

        [HttpPut("{SexoId}")]
        public async Task<ActionResult> put(int SexoId, Sexo dadosSexoAlt){
            try{
                var result = await _context.Sexo.FindAsync(SexoId);
                if (SexoId != result.idSexo)
                {
                    return BadRequest();
                }
                result.sexo = dadosSexoAlt.sexo;
                await _context.SaveChangesAsync();
                return Created($"/api/sexo/{dadosSexoAlt.sexo}", dadosSexoAlt);
            }
            catch{
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados.");
            }
        }

        [HttpDelete("{SexoId}")]
        public async Task<ActionResult> delete(int SexoId){
            try{
                var sexo = await _context.Sexo.FindAsync(SexoId);
                
                if(sexo == null)
                {
                    return NotFound();
                }
                
                _context.Remove(sexo);
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