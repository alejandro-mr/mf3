import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "./Footer/Footer";
import Navigation from "./Navigation/Navigation";

function Layout() {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </>
  );
}

export default Layout;
