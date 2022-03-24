using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace FarmerScheme.Models
{
    public partial class FarmerReg
    {
        public FarmerReg()
        {
            CalcInsurance = new HashSet<CalcInsurance>();
            SellCrops = new HashSet<SellCrops>();
        }

        public string Farmername { get; set; }
        public long? Contactno { get; set; }
        public string Farmeremail { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public int? Pincode { get; set; }
        public string Farmerpassword { get; set; }
        public string LandAddress { get; set; }
        public int? LandPin { get; set; }

        public virtual ICollection<CalcInsurance> CalcInsurance { get; set; }
        public virtual ICollection<SellCrops> SellCrops { get; set; }
    }
}
