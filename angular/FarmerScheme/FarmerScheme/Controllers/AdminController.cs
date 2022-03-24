using FarmerScheme.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FarmerScheme.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {

        FarmerDBContext db;

        public AdminController(FarmerDBContext context)
        {
            db = context;
        }
        public IActionResult Get()
        {
            return Ok(db.Admin);
        }

        [HttpPost("AdminLogin")]
        public IActionResult Login(Admin admin)
        {
            var u = db.Admin.Where(t => t.Username == admin.Username && t.Password == admin.Password).FirstOrDefault();
            if (u != null)
            {
                return Ok();
            }
            else
                return Unauthorized();

        }
    }
}
