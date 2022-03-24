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
    public class BidderBidController : ControllerBase
    {

        FarmerDBContext db;

        public BidderBidController(FarmerDBContext db1)
        {
            db = db1;
        }

        [HttpGet]
        public IActionResult Getall()
        {
            return Ok(db.SellCrops);
        }
        [HttpGet("{requestId}")]
        public IActionResult GetByID(int requestId)
        {

            SellCrops p = db.SellCrops.Find(requestId);
            return Ok(p);
        }


        [HttpPut("{requestId}")]
        public IActionResult Update(int? requestId, SellCrops p)
        {
            if (requestId != null)
            {
                db.SellCrops.Update(p);
                //db.SellCrops.Add
                db.SaveChanges();
                return Ok(p);
            }
            else
            {
                return BadRequest("try again");
            }
        }
    }

}

