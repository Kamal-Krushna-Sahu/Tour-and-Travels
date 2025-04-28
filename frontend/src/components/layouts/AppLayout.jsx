import { Outlet } from "react-router";
import Header from "../ui/Header.jsx";
import Footer from "../ui/Footer.jsx";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default AppLayout;
