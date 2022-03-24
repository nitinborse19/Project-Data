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
    public class ClaimRequestController : ControllerBase
    {
        FarmerDBContext db;

        public ClaimRequestController(FarmerDBContext context)
        {
            db = context;
        }
        // [HttpGet]
        public IActionResult Get()
        {
            return Ok(db.ClaimReq);
        }
        [HttpPost]
        public IActionResult ClaimRegister(ClaimReq claim)
        {
            var b_email = db.ClaimReq.Where(t => t.ClaimRequestId == claim.ClaimRequestId).FirstOrDefault();

            if (b_email == null)
            {
                db.ClaimReq.Add(claim);
                db.SaveChanges();
                return Ok(claim);
            }
            else
            {
                return BadRequest("Email Already Exists");
            }
        }
    }
}
