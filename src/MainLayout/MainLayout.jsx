import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Pages/Footer/Footer";

function MainLayout() {
  return (
    <div className="mx-auto max-w-7xl">
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

export default MainLayout;
