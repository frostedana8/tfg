using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace webapi.Database.Models;

[Table("usuarios")]
public partial class Usuario
{
    [Key]
    [Column("id")]
    public int Id { get; set; }

    [Column("username")]
    [StringLength(100)]
    public string Username { get; set; } = null!;

    [Column("email")]
    [StringLength(100)]
    public string? Email { get; set; }

    [Column("contraseña")]
    [StringLength(100)]
    public string Contraseña { get; set; } = null!;

    [Column("imagen")]
    public byte[]? Imagen { get; set; }

    [Column("puntos")]
    public int? Puntos { get; set; }
}
