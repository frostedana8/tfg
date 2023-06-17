using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace webapi.Database.Models;

[Table("peliculasFecha")]
public partial class PeliculasFecha
{
    [Key]
    [Column("id")]
    public int Id { get; set; }

    [Column("idPelicula")]
    public int IdPelicula { get; set; }

    [Column("fecha")]
    public DateOnly Fecha { get; set; }
}
