using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace FarmerScheme.Models
{
    public partial class ClaimReq
    {
        public ClaimReq()
        {
            ClaimHistory = new HashSet<ClaimHistory>();
        }

        public int ClaimRequestId { get; set; }
        public int? Policyno { get; set; }
        public bool ClaimStatus { get; set; }
        public string CauseofLoss { get; set; }
        public DateTime? DateofLoss { get; set; }

        public virtual ClaimInsurance PolicynoNavigation { get; set; }
        public virtual ICollection<ClaimHistory> ClaimHistory { get; set; }
    }
}
