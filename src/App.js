import NavbarPage from "./navbar/NavbarPage";
import { BrowserRouter } from "react-router-dom";
import RouterApp from "./routerApp/RouterApp";
import SideBar from "./sidebar/SideBar";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarPage />
        <RouterApp />
      </BrowserRouter>
    </>
  );
}
