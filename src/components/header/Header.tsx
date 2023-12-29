import '../../App.css';
import Switch from "react-switch";
import IconLight from './switch/IconLight';
import IconDark from './switch/IconDark';
import { useHeader } from '../../hooks/useHeader';
import BuyButton from './BuyButton';
import { Link } from "react-router-dom";

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
    <header className='flex'>
      <ul className={'w-full flex justify-end p-5 mr-20 items-center ' + (isDarkMode ? 'codia-yellow-text' : '')}>
            <li><Link to='/'>Home</Link></li>      
            <li><Link to='/tutorial'> How to use </Link></li>      
            <li>Pricing</li>      
            <li><Link to='/contact'>Contact us</Link></li> 
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
            <li>
              <BuyButton />
            </li>
        </ul>
    </header>
  )
}

export default Header
