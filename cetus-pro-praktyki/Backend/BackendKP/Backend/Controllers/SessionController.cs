using Backend;
using Microsoft.AspNetCore.Mvc;

namespace StudyBuddy.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class SessionController : Controller
    {
        [HttpGet]
        public IEnumerable<string> GetSessionInfo()
        {
            List<string> sessionInfo = new List<string>();

            if (string.IsNullOrWhiteSpace(HttpContext.Session.GetString(SessionVariables.SessionKey)))
            {
                HttpContext.Session.SetString(SessionVariables.SessionName, "Current user");
                HttpContext.Session.SetString(SessionVariables.SessionKey, Guid.NewGuid().ToString());
            }

            var username = HttpContext.Session.GetString(SessionVariables.SessionName);
            var key = HttpContext.Session.GetString(SessionVariables.SessionKey);

            sessionInfo.Add(username);
            sessionInfo.Add(key);

            

            return sessionInfo;
        }
    }
}
