using System.ComponentModel.DataAnnotations;

namespace VanSport_API.models
{
    public class Sexo
    {
        [Key]
        public int idSexo { get; set; }
        public string? sexo { get; set; }
    }
}