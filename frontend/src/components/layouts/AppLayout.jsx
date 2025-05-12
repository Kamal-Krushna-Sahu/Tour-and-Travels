import { Outlet } from "react-router";
import Header from "../ui/Header.jsx";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default AppLayout;
