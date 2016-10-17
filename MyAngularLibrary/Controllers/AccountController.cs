using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Threading.Tasks;
using System.Web.Mvc;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.Owin;
using MyAngularLibrary.Models;

namespace MyAngularLibrary.Controllers
{
    [Authorize]
    public class AccountController : Controller
    {
        private ApplicationUserManager userManager;
        private ApplicationSignInManager signInManager;

        public AccountController()
        {
        }

        public AccountController(ApplicationUserManager userManager, ApplicationSignInManager signInManager)
        {
            this.userManager = userManager;
            this.signInManager = signInManager;
        }

        public ApplicationUserManager UserManager
        {
            get { return userManager ?? HttpContext.GetOwinContext().GetUserManager<ApplicationUserManager>(); }
            private set { userManager = value; }
        }

        public ApplicationSignInManager SignInManager
        {
            get { return signInManager ?? HttpContext.GetOwinContext().Get<ApplicationSignInManager>(); }
            private set { signInManager = value; }
        }

        [AllowAnonymous]
        public ActionResult Login()
        {
            return View();
        }

        [AllowAnonymous]
        public ActionResult Register()
        {
            return View();
        }

        [HttpPost]
        [AllowAnonymous]
        public async Task<bool> Register(RegisterViewModel model)
        {
            var user = new ApplicationUser {UserName = model.Email, Email = model.Email};
            var result = await UserManager.CreateAsync(user, model.Password);
            if (!result.Succeeded)
            {
                return false;
            }
            await SignInManager.SignInAsync(user, false, false);
            return true;
        }

        [HttpPost]
        [AllowAnonymous]
        public async Task<int> Login(LoginViewModel model)
        {
            var result = await SignInManager.PasswordSignInAsync(model.Email, model.Password, model.RememberMe, false);
            switch (result)
            {
                case SignInStatus.Success:
                    return User.Identity.GetUserId<int>();
                default:
                    ModelState.AddModelError("", "Invalid login attempt.");
                    return 0;
            }
        }
    }
}