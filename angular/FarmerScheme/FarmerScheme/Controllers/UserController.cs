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
    public class UserController : ControllerBase
    {
        FarmerDBContext db;
        
        public UserController(FarmerDBContext context)
        {
            db = context;
        }
        public IActionResult Get()
        {
            return Ok(db.FarmerReg);
        }

        [HttpPost("UserLogin")]
        public IActionResult Login(FarmerLoginModel farmer)
        {
            var u = db.FarmerReg.Where(t => t.Farmeremail == farmer.Email && t.Farmerpassword == farmer.Password).FirstOrDefault();
            if (u != null)
            {
                return Ok();
            }
            else
                return Unauthorized();

        }


        [HttpPost]
        public IActionResult FarmerRegister(FarmerReg reg)
        {
            var f_email = db.FarmerReg.Where(t => t.Farmeremail == reg.Farmeremail).FirstOrDefault();

            if (f_email == null)
            {
                db.FarmerReg.Add(reg);
                db.SaveChanges();
                return Ok(reg);
            }
            else
            {
                return BadRequest("Email Already Exists");
            }
        }
    }
}
