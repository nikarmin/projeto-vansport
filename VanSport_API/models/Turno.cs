using System.ComponentModel.DataAnnotations;

namespace VanSport_API.models
{
    public class Turno
    {
        [Key]
        public int idTurno { get; set; }
        public string nomeTurno { get; set; }
    }
}