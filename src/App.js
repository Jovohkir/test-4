import NavbarPage from "./navbar/NavbarPage";
import { BrowserRouter } from "react-router-dom";
import RouterApp from "./routerApp/RouterApp";
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
