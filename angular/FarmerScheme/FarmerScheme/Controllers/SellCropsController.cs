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
    public class SellCropsController : ControllerBase
    {
        FarmerDBContext db;

        public SellCropsController(FarmerDBContext context)
        {
            db = context;
        }


        public IActionResult getAll()
        {
            return Ok(db.SellCrops);
        }
        [HttpPost]
        public IActionResult GetSellCrops(SellCrops sc)
        {
            var crop_request_id = db.SellCrops.Where(t => t.RequestId == sc.RequestId).FirstOrDefault();

            if (crop_request_id == null)
            {
                db.SellCrops.Add(sc);
                db.SaveChanges();
                return Ok(sc);
            }
            else
            {
                return BadRequest("Crop already exists");
            }

        }


    }
}
