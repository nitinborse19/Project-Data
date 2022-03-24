using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using FarmerScheme.Models;
using System.Text;

namespace FarmerScheme.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BidPricesController : ControllerBase
    {
        private readonly FarmerDBContext _context;

        public BidPricesController(FarmerDBContext context)
        {
            _context = context;
        }

        // GET: api/BidPrices
        [HttpGet]
        public async Task<ActionResult<IEnumerable<BidPrice>>> GetBidPrice()
        {
            return await _context.BidPrice.ToListAsync();
        }

        // GET: api/BidPrices/5
        [HttpGet("{id}")]
        public async Task<ActionResult<BidPrice>> GetBidPrice(int id)
        {
            var bidPrice = await _context.BidPrice.FindAsync(id);

            if (bidPrice == null)
            {
                return NotFound();
            }

            return bidPrice;
        }

        // PUT: api/BidPrices/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBidPrice(int id, BidPrice bidPrice)
        {
            if (id != bidPrice.BidId)
            {
                return BadRequest();
            }

            _context.Entry(bidPrice).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BidPriceExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/BidPrices
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public ActionResult PostBidPrice(BidPrice bidPrice)
        {
            Random r = new Random();
            bidPrice.BidId = r.Next(10, 10000);
            _context.BidPrice.Add(bidPrice);
            //try
            //{
            _context.SaveChanges();
            //}
            //catch (DbUpdateException)
            //{
            //    if (BidPriceExists(bidPrice.BidId))
            //    {
            //        return Conflict();
            //    }
            //    else
            //    {
            //        throw;
            //    }
            //}

            //return CreatedAtAction("GetBidPrice", new { id = bidPrice.BidId }, bidPrice);
            return Ok();
        }

        // DELETE: api/BidPrices/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<BidPrice>> DeleteBidPrice(int id)
        {
            var bidPrice = await _context.BidPrice.FindAsync(id);
            if (bidPrice == null)
            {
                return NotFound();
            }

            _context.BidPrice.Remove(bidPrice);
            await _context.SaveChangesAsync();

            return bidPrice;
        }

        private bool BidPriceExists(int id)
        {
            return _context.BidPrice.Any(e => e.BidId == id);
        }
    }
}
