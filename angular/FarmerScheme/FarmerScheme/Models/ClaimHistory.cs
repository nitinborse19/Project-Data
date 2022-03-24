using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace FarmerScheme.Models
{
    public partial class ClaimHistory
    {
        public int? ClaimRequestId { get; set; }
        public int ClaimId { get; set; }
        public decimal? Amount { get; set; }
        public DateTime? ClaimDate { get; set; }

        public virtual ClaimReq ClaimRequest { get; set; }
    }
}
