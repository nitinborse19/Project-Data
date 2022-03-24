using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace FarmerScheme.Models
{
    public partial class BidderReg
    {
        public BidderReg()
        {
            BidPrice = new HashSet<BidPrice>();
        }

        public string Biddername { get; set; }
        public long? Contactno { get; set; }
        public string Bidderemail { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public int? Pincode { get; set; }
        public string Bidderpassword { get; set; }

        public virtual ICollection<BidPrice> BidPrice { get; set; }
    }
}
