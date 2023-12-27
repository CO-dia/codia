import './App.css';
import { useState } from 'react';
import Switch from "react-switch";
import IconLight from './components/IconLight';
import IconDark from './components/IconDark';

function App() {
  const [test, setTest] = useState(false);
  return (
    <div className="bg-red-500">
      <Switch
        onChange={() => setTest(!test)}
        checked={test}
        uncheckedIcon={<IconLight />}
        checkedIcon={<IconDark />}
        onColor='#022038'
        offColor='#CCE6F4'
        onHandleColor='#CCE6F4'
        offHandleColor='#022038'
      />
    </div>
  )
}

export default App
