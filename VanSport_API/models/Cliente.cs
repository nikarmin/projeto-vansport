using System.ComponentModel.DataAnnotations;

namespace VanSport_API.models
{
    public class Cliente
    {
        [Key]
        public int idCliente { get; set; }
        public string cpf { get; set; }
        public string nome { get; set; }
        public string email { get; set; }
        public string senha { get; set; }
        public string numeroCelular { get; set; }
        public string cep { get; set; }
        public string numero { get; set; }
        public string? foto { get; set; }
        public int idCidade { get; set; }
        public int idTurno { get; set; }
        public int idSexo { get; set; }
    }
}