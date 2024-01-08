using Microsoft.EntityFrameworkCore;
namespace Back.Entities
{
    public class ProjektDbContext : DbContext
    {
        private string Conntection_string = "Server=StudyBuddy.mssql.somee.com;user id=projekt_Study;pwd=TomaszJajo;data source=StudyBuddy.mssql.somee.com;persist security info=False;initial catalog=StudyBuddy;TrustServerCertificate=True;Encrypt=False;Trusted_Connection=False;MultipleActiveResultSets=True";
        public DbSet<Books> Books { get; set; }
        public DbSet<School_Subjects> School_Subjects { get;set; }
        public DbSet<Review> Reviews { get; set; }



        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(Conntection_string);  
        }
    }


}
