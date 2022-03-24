using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace FarmerScheme.Models
{
    public partial class ClaimInsurance
    {
        public ClaimInsurance()
        {
            ClaimReq = new HashSet<ClaimReq>();
        }

        public int Policyno { get; set; }
        public int? ApplicationId { get; set; }
        public string Company { get; set; }
        public string InsureeName { get; set; }
        public DateTime? InsuranceDate { get; set; }
        public decimal? Amount { get; set; }

        public virtual CalcInsurance Application { get; set; }
        public virtual ICollection<ClaimReq> ClaimReq { get; set; }
    }
}
