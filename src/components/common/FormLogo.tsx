import { Link, useLocation } from "react-router-dom";

export default function FormLogo() {
  const location = useLocation();

  const isLoginPage = location.pathname === "/login";
  const nextPage = isLoginPage ? "/signup" : "/login";
  const nextPageText = isLoginPage ? "Create account" : "Sign in";

  return (
    <Link to={nextPage} className="block mb-6" title={`Go to ${nextPageText}`}>
      <img src="/logo.png" alt="GateHub" className="h-12 w-auto mx-auto" />
    </Link>
  );
}
