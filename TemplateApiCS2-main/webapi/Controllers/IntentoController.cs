using Microsoft.AspNetCore.Mvc;
using webapi.Database;
using webapi.Database.Models;

namespace webapi.Controllers;

[ApiController]
[Route("[controller]")]
public partial class IntentoController : CrudController<IntentoController, Intento>
{
    public IntentoController(ILogger<IntentoController> Logger, DatabaseContext DatabaseContext) : base(Logger, DatabaseContext)
    {

    }
}