import LoginPage from "views/Pages/LoginPage.jsx";
import RegisterPage from "views/Pages/RegisterPage.jsx";
import LockScreenPage from "views/Pages/LockScreenPage.jsx";

const pagesRoutes = [
    { path: "/pages/register-page", name: "Register Page", short: "Register", mini: "RP", icon: "tech_mobile", component: RegisterPage },
    { path: "/pages/login-page", name: "Login Page", short: "Login", mini: "LP", icon: "users_circle-08", component: LoginPage },
    { path: "/pages/lock-screen-page", name: "Lock Screen Page", short: "Lock", mini: "LSP", icon: "ui-1_lock-circle-open", component: LockScreenPage },
    { redirect: true, path: "/pages", pathTo: "/pages/register-page", name: "Register Page" }
];

export default pagesRoutes;
