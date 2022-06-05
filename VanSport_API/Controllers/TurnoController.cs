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
    }
}