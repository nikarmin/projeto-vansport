using System.ComponentModel.DataAnnotations;

namespace VanSport_API.models
{
    public class Cidade
    {
        [Key]
        public int idCidade { get; set; }
        public string nome { get; set; }
    }
}