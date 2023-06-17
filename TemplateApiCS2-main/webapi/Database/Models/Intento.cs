using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace webapi.Database.Models;

[PrimaryKey("IdPeliculasFecha", "IdUsuarios")]
[Table("intentos")]
public partial class Intento
{
    [Key]
    [Column("idPeliculasFecha")]
    public int IdPeliculasFecha { get; set; }

    [Key]
    [Column("idUsuarios")]
    public int IdUsuarios { get; set; }

    [Column("numeroIntentos")]
    public int NumeroIntentos { get; set; }
}
