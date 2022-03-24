using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace FarmerScheme.Models
{
    public partial class FarmerDBContext : DbContext
    {
        public FarmerDBContext()
        {
        }

        public FarmerDBContext(DbContextOptions<FarmerDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Admin> Admin { get; set; }
        public virtual DbSet<BidPrice> BidPrice { get; set; }
        public virtual DbSet<BidderReg> BidderReg { get; set; }
        public virtual DbSet<CalcInsurance> CalcInsurance { get; set; }
        public virtual DbSet<ClaimHistory> ClaimHistory { get; set; }
        public virtual DbSet<ClaimInsurance> ClaimInsurance { get; set; }
        public virtual DbSet<ClaimReq> ClaimReq { get; set; }
        public virtual DbSet<FarmerReg> FarmerReg { get; set; }
        public virtual DbSet<SellCrops> SellCrops { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Server=NISH\\SQLEXPRESS;Database=FarmerDB;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Admin>(entity =>
            {
                entity.HasKey(e => e.Username)
                    .HasName("PK__Admin__F3DBC573BE32FBF6");

                entity.Property(e => e.Username)
                    .HasColumnName("username")
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasColumnName("password")
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<BidPrice>(entity =>
            {
                entity.HasKey(e => e.BidId)
                    .HasName("PK__BidPrice__4A733D924FE6C15C");

                entity.Property(e => e.BidId).ValueGeneratedNever();

                entity.Property(e => e.Bidderemail)
                    .HasColumnName("bidderemail")
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Price)
                    .HasColumnName("price")
                    .HasColumnType("money");

                entity.HasOne(d => d.BidderemailNavigation)
                    .WithMany(p => p.BidPrice)
                    .HasForeignKey(d => d.Bidderemail)
                    .HasConstraintName("FK__BidPrice__bidder__3C69FB99");

                entity.HasOne(d => d.Request)
                    .WithMany(p => p.BidPrice)
                    .HasForeignKey(d => d.RequestId)
                    .HasConstraintName("FK__BidPrice__Reques__3B75D760");
            });

            modelBuilder.Entity<BidderReg>(entity =>
            {
                entity.HasKey(e => e.Bidderemail)
                    .HasName("PK__BidderRe__2A28FBEF4A858F59");

                entity.HasIndex(e => e.Bidderpassword)
                    .HasName("UQ__BidderRe__21706A8F83FCD3B5")
                    .IsUnique();

                entity.Property(e => e.Bidderemail)
                    .HasColumnName("bidderemail")
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Address)
                    .HasMaxLength(60)
                    .IsUnicode(false);

                entity.Property(e => e.Biddername)
                    .HasColumnName("biddername")
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Bidderpassword)
                    .IsRequired()
                    .HasColumnName("bidderpassword")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.City)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .IsFixedLength();

                entity.Property(e => e.Contactno).HasColumnName("contactno");

                entity.Property(e => e.State)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .IsFixedLength();
            });

            modelBuilder.Entity<CalcInsurance>(entity =>
            {
                entity.HasKey(e => e.ApplicationId)
                    .HasName("PK__CalcInsu__C93A4C99257A5B82");

                entity.Property(e => e.Area)
                    .HasColumnName("area")
                    .HasColumnType("decimal(18, 0)");

                entity.Property(e => e.CropName)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Farmeremail)
                    .HasColumnName("farmeremail")
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Season)
                    .HasColumnName("season")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Suminsured)
                    .HasColumnName("suminsured")
                    .HasColumnType("money");

                entity.Property(e => e.Year).HasColumnName("year");

                entity.HasOne(d => d.FarmeremailNavigation)
                    .WithMany(p => p.CalcInsurance)
                    .HasForeignKey(d => d.Farmeremail)
                    .HasConstraintName("FK__CalcInsur__farme__2B3F6F97");

                entity.HasOne(d => d.Request)
                    .WithMany(p => p.CalcInsurance)
                    .HasForeignKey(d => d.RequestId)
                    .HasConstraintName("FK__CalcInsur__Reque__38996AB5");
            });

            modelBuilder.Entity<ClaimHistory>(entity =>
            {
                entity.HasKey(e => e.ClaimId)
                    .HasName("PK__ClaimHis__EF2E13BB52C33CC3");

                entity.Property(e => e.ClaimId)
                    .HasColumnName("ClaimID")
                    .ValueGeneratedNever();

                entity.Property(e => e.Amount).HasColumnType("money");

                entity.Property(e => e.ClaimDate).HasColumnType("date");

                entity.Property(e => e.ClaimRequestId).HasColumnName("claimRequestID");

                entity.HasOne(d => d.ClaimRequest)
                    .WithMany(p => p.ClaimHistory)
                    .HasForeignKey(d => d.ClaimRequestId)
                    .HasConstraintName("FK__ClaimHist__claim__33D4B598");
            });

            modelBuilder.Entity<ClaimInsurance>(entity =>
            {
                entity.HasKey(e => e.Policyno)
                    .HasName("PK__ClaimIns__2E12258F4A712C07");

                entity.Property(e => e.Policyno).ValueGeneratedNever();

                entity.Property(e => e.Amount).HasColumnType("money");

                entity.Property(e => e.Company)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.InsuranceDate).HasColumnType("date");

                entity.Property(e => e.InsureeName)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.HasOne(d => d.Application)
                    .WithMany(p => p.ClaimInsurance)
                    .HasForeignKey(d => d.ApplicationId)
                    .HasConstraintName("FK__ClaimInsu__Appli__2E1BDC42");
            });

            modelBuilder.Entity<ClaimReq>(entity =>
            {
                entity.HasKey(e => e.ClaimRequestId)
                    .HasName("PK__ClaimReq__D151C3C6B76797FA");

                entity.Property(e => e.ClaimRequestId)
                    .HasColumnName("claimRequestID")
                    .ValueGeneratedNever();

                entity.Property(e => e.CauseofLoss)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.DateofLoss).HasColumnType("date");

                entity.HasOne(d => d.PolicynoNavigation)
                    .WithMany(p => p.ClaimReq)
                    .HasForeignKey(d => d.Policyno)
                    .HasConstraintName("FK__ClaimReq__Policy__30F848ED");
            });

            modelBuilder.Entity<FarmerReg>(entity =>
            {
                entity.HasKey(e => e.Farmeremail)
                    .HasName("PK__FarmerRe__3405349FC7978C45");

                entity.HasIndex(e => e.Farmerpassword)
                    .HasName("UQ__FarmerRe__36DBDCC3C8B753FA")
                    .IsUnique();

                entity.Property(e => e.Farmeremail)
                    .HasColumnName("farmeremail")
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Address)
                    .HasMaxLength(60)
                    .IsUnicode(false);

                entity.Property(e => e.City)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .IsFixedLength();

                entity.Property(e => e.Contactno).HasColumnName("contactno");

                entity.Property(e => e.Farmername)
                    .HasColumnName("farmername")
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Farmerpassword)
                    .IsRequired()
                    .HasColumnName("farmerpassword")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.LandAddress)
                    .HasColumnName("landAddress")
                    .HasMaxLength(60)
                    .IsUnicode(false);

                entity.Property(e => e.LandPin).HasColumnName("landPin");

                entity.Property(e => e.State)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .IsFixedLength();
            });

            modelBuilder.Entity<SellCrops>(entity =>
            {
                entity.HasKey(e => e.RequestId)
                    .HasName("PK__SellCrop__33A8517A9980E572");

                entity.Property(e => e.Bidcrop)
                    .HasColumnName("bidcrop")
                    .HasColumnType("money");

                entity.Property(e => e.Bidderemail)
                    .HasColumnName("bidderemail")
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Cropname)
                    .HasColumnName("cropname")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Croptype)
                    .HasColumnName("croptype")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Farmeremail)
                    .HasColumnName("farmeremail")
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Fertilizer)
                    .HasColumnName("fertilizer")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Initialprice)
                    .HasColumnName("initialprice")
                    .HasColumnType("money");

                entity.Property(e => e.Quantity).HasColumnName("quantity");

                entity.HasOne(d => d.FarmeremailNavigation)
                    .WithMany(p => p.SellCrops)
                    .HasForeignKey(d => d.Farmeremail)
                    .HasConstraintName("FK__SellCrops__farme__1CF15040");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
