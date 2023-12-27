import '../App.css';
import Switch from "react-switch";
import IconLight from './IconLight';
import IconDark from './IconDark';
import { useHeader } from '../hooks/useHeader';

type HeaderData = {
  handleSwitch: () => void;
  isDarkMode: boolean;
};

const Header = () => {
  const headerData: HeaderData | undefined = useHeader();
  if (!headerData) {
    return null;
  }
  const { handleSwitch, isDarkMode } = headerData;

  return (
    <header>
        <ul>
            <li>Home</li>      
            <li>How to use</li>      
            <li>Pricing</li>      
            <li>Contact us</li> 
            <li>
              <Switch
                onChange={handleSwitch}
                checked={isDarkMode}
                uncheckedIcon={<IconLight />}
                checkedIcon={<IconDark />}
                onColor='#CCE6F4'
                offColor='#022038'
                onHandleColor='#022038'
                offHandleColor='#CCE6F4' />
            </li>
        </ul>
    </header>
  )
}

export default Header
