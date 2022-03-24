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
    public class ApplyInsuranceController : ControllerBase
    {
        FarmerDBContext db;

        public ApplyInsuranceController(FarmerDBContext context)
        {
            db = context;
        }

        public IActionResult Get()
        {
            return Ok(db.CalcInsurance);
        }


        [HttpPost]
        public IActionResult InsuranceCalculator(CalcInsurance c)
        {

            var f_email = db.CalcInsurance.Where(t => t.Farmeremail == c.Farmeremail).FirstOrDefault();

            if (f_email == null)
            {
                db.CalcInsurance.Add(c);
                db.SaveChanges();
                return Ok(c);
            }
            else
            {
                return BadRequest("Insurance Already Applied Controller");
            }
        }


    }
}
