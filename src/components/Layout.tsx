import Header from './header/Header'; // Assurez-vous que le chemin du composant Header est correct
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;