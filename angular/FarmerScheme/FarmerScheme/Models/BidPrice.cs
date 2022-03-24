using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace FarmerScheme.Models
{
    public partial class BidPrice
    {
        public int BidId { get; set; }
        public int? RequestId { get; set; }
        public string Bidderemail { get; set; }
        public decimal? Price { get; set; }

        public virtual BidderReg BidderemailNavigation { get; set; }
        public virtual SellCrops Request { get; set; }
    }
}
