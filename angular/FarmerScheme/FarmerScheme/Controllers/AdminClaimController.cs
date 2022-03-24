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
    public class AdminClaimController : ControllerBase
    {
        FarmerDBContext db;
        public AdminClaimController(FarmerDBContext context)
        {
            db = context;
        }
        [HttpGet("AId")]
        public IActionResult GetAdminInsurance()
        {
            var g = from b in db.CalcInsurance
                    join r in db.ClaimInsurance
                    on b.ApplicationId equals r.ApplicationId

                    select new
                    {

                        b.Area,
                        b.ApplicationId,
                        b.Suminsured,
                        r.Company
                    };

            return Ok(g);



        }
    }
}
