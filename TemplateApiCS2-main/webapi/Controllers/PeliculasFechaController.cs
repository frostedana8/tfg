using Microsoft.AspNetCore.Mvc;
using webapi.Database;
using webapi.Database.Models;

namespace webapi.Controllers;

[ApiController]
[Route("[controller]")]
public partial class PeliculasFechaController : CrudController<PeliculasFechaController, PeliculasFecha>
{
    public PeliculasFechaController(ILogger<PeliculasFechaController> Logger, DatabaseContext DatabaseContext) : base(Logger, DatabaseContext)
    {

    }
}