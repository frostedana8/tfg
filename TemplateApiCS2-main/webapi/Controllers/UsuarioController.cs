using Microsoft.AspNetCore.Mvc;
using webapi.Database;
using webapi.Database.Models;

namespace webapi.Controllers;

[ApiController]
[Route("[controller]")]
public partial class UsuarioController : CrudController<UsuarioController, Usuario>
{
    public UsuarioController(ILogger<UsuarioController> Logger, DatabaseContext DatabaseContext) : base(Logger, DatabaseContext)
    {

    }
}