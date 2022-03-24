using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace FarmerScheme.Models
{
    public partial class SellCrops
    {
        public SellCrops()
        {
            BidPrice = new HashSet<BidPrice>();
            CalcInsurance = new HashSet<CalcInsurance>();
        }

        public int RequestId { get; set; }
        public string Farmeremail { get; set; }
        public string Croptype { get; set; }
        public string Cropname { get; set; }
        public string Fertilizer { get; set; }
        public short? Quantity { get; set; }
        public decimal? Initialprice { get; set; }
        public decimal? Bidcrop { get; set; }
        public string Bidderemail { get; set; }

        public virtual FarmerReg FarmeremailNavigation { get; set; }
        public virtual ICollection<BidPrice> BidPrice { get; set; }
        public virtual ICollection<CalcInsurance> CalcInsurance { get; set; }
    }
}
