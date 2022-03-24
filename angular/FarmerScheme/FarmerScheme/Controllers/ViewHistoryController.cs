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
    public class ViewHistoryController : ControllerBase
    {
     FarmerDBContext db;

        public ViewHistoryController(FarmerDBContext context)
        {
            db = context;
        }
        [HttpGet("Bid")]
        public IActionResult GetSellrequestinfo()
        {
            var g = from s in db.SellCrops
                    join b in db.BidPrice
                    on s.RequestId equals b.RequestId

                    select new
                    {
                        b.Bidderemail,
                        b.Price,
                        s.Initialprice,
                        s.Croptype,
                        s.Cropname,
                        s.Quantity
                    };
            return Ok(g);



        }
    }
}
