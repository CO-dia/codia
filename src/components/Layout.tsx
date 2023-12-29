import { useHeader } from '../hooks/useHeader';
import Header from './header/Header';
import { Outlet } from "react-router-dom";

type HeaderData = {
  isDarkMode: boolean;
};

const Layout = () => {
  const headerData: HeaderData | undefined = useHeader();
  if (!headerData) {
    return null;
  }
  
  const { isDarkMode } = headerData;
  return (
    <div className={isDarkMode ? 'codia-aliceblue-text' : 'codia-darkblue-text'}>
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;