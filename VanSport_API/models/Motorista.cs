using System.ComponentModel.DataAnnotations;

namespace VanSport_API.models
{
    public class Motorista
    {
        [Key]
        public int idMotorista { get; set; }
        public string cpf { get; set; }
        public string email { get; set; }
        public string senha { get; set; }
        public string nome { get; set; }
        public string numeroCelular { get; set; }
        public string? foto { get; set; }
        public string cep { get; set; }
        public string endereco { get; set; }
        public int idSexo { get; set; }
        public int idCidade { get; set; }
    }
}