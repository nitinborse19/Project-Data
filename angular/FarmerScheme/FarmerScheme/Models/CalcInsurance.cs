using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace FarmerScheme.Models
{
    public partial class CalcInsurance
    {
        public CalcInsurance()
        {
            ClaimInsurance = new HashSet<ClaimInsurance>();
        }

        public int ApplicationId { get; set; }
        public string Farmeremail { get; set; }
        public string Season { get; set; }
        public int? Year { get; set; }
        public decimal? Suminsured { get; set; }
        public decimal? Area { get; set; }
        public int? RequestId { get; set; }
        public string CropName { get; set; }

        public virtual FarmerReg FarmeremailNavigation { get; set; }
        public virtual SellCrops Request { get; set; }
        public virtual ICollection<ClaimInsurance> ClaimInsurance { get; set; }
    }
}
