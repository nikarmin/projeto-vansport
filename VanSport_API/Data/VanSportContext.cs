
using Microsoft.EntityFrameworkCore;
using VanSport_API.models;

namespace VanSport_API.Data
{
    public class VanSportContext : DbContext
    {
        public VanSportContext(DbContextOptions<VanSportContext> options) : base (options){

        }

        public DbSet<Cliente> Cliente { get; set; }
        public DbSet<Motorista> Motorista { get; set; }
        public DbSet<Sexo> Sexo { get; set; }
        public DbSet<Turno> Turno { get; set; }
    }
}