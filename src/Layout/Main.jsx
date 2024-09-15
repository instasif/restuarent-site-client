import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";

function Main() {
  const location = useLocation();
  // const noHeaderFooter = location.pathname.includes("login") || location.pathname.includes("signup")
  const noHeaderFooter = ["/login", "/signup"].includes(location.pathname);
  return (
    <>
      {noHeaderFooter || <Navbar />}
      <Outlet />
      {noHeaderFooter || <Footer />}
    </>
  );
}

export default Main;
