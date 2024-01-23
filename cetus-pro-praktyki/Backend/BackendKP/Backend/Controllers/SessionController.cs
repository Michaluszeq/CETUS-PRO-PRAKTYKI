using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;



namespace Backend.Controllers
{
    [ApiController]
    [Route("controller")]
    public class SessionController : Controller
    {
        public const string SessionName = "_SessionName";
        public const string SessionAge = "_SessionAge";

        private readonly ILogger<SessionController> _logger;

        public SessionController(ILogger<SessionController> logger)
        {
            _logger = logger;
        }

        [HttpGet(Name = "GetSession")]
        public void OnGet()
        {
            if(string.IsNullOrEmpty(HttpContext.Session.GetString(SessionName)))
            {
                HttpContext.Session.SetString(SessionName, "Test");
                HttpContext.Session.SetInt32(SessionAge, 14);
            }
            var name = HttpContext.Session.GetString(SessionName);
            var age = HttpContext.Session.GetInt32(SessionAge);

            _logger.LogInformation("Session name: {Name}", name);
            _logger.LogInformation("Session age: {Age}", age);
        }
            
    }
}
