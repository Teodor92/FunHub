using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FunHub.Model
{
    public class Joke
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [MinLength(5)]
        [Column(TypeName = "ntext")]
        public string Content { get; set; }

        public DateTime PostDate { get; set; }

        [MinLength(3)]
        [MaxLength(50)]
        [StringLength(50)]
        public string PostedBy { get; set; }
    }
}
