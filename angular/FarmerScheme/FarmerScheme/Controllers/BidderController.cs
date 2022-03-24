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
    public class BidderController : ControllerBase
    {
        FarmerDBContext db;

        public BidderController(FarmerDBContext context)
        {
            db = context;
        }
        public IActionResult Get()
        {
            return Ok(db.BidderReg);
        }

        [HttpPost("BidderLogin")]
        public IActionResult Login(BidderLoginModel bidder)
        {
            var u = db.BidderReg.Where(t => t.Bidderemail == bidder.username && t.Bidderpassword == bidder.password).FirstOrDefault();
            if (u != null)
            {
                return Ok();
            }
            else
                return Unauthorized();

        }


        [HttpPost]
        public IActionResult BidderRegister(BidderReg bidder)
        {
            var b_email = db.BidderReg.Where(t => t.Bidderemail == bidder.Bidderemail).FirstOrDefault();

            if (b_email == null)
            {
                db.BidderReg.Add(bidder);
                db.SaveChanges();
                return Ok(bidder);
            }
            else
            {
                return BadRequest("Email Already Exists");
            }
        }
    }
}
