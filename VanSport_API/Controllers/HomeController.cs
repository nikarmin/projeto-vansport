using System.Net.Mime;
using Microsoft.AspNetCore.Mvc;

namespace VanSport_API.Controllers
{
    [ApiController]
    [Route("/")]
    public class HomeController : ControllerBase
    {
        public IActionResult Inicio() {
            return new ContentResult {
                ContentType = "text/html",
                Content = "<h1> gay </h1>"
            };
        }
    }
}