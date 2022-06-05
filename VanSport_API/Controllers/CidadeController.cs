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
    public class CidadeController
    {
        private readonly VanSportContext _context;

        public CidadeController(VanSportContext context){
            _context = context;
        }

        [HttpGet]
        public ActionResult<List<Cidade>> GetAll() {
            return _context.Cidade.ToList();
        }
    }
}