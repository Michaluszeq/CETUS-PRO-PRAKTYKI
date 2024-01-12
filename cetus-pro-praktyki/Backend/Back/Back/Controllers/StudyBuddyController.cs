using Back.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Back.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class StudyBuddyController : ControllerBase
    {
        private readonly ProjektDbContext _DbContext;

        public StudyBuddyController(ProjektDbContext dbContext)
        {
            _DbContext = dbContext;
        }

        [HttpPost]

        public ActionResult galeria(School_Subjects s)
        {
            _DbContext.School_Subjects.Add(s);
            _DbContext.SaveChanges();

          var c=  _DbContext.Reviews.Where(r => r.School_SubjectsId == 2);
            return Ok("zadowalo sue");
        }
    }
}
