using FunHub.Model;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FunHub.Data
{
    public class FunHubContext : DbContext
    {
        public FunHubContext()
            : base("FunHubDb")
        {
        }

        public DbSet<Joke> Jokes { get; set; }
    }
}
