import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Layout from './components/Layout';
import Contact from './pages/Contact';
import Tutorial from './pages/Tutorial';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='contact' element={<Contact />} />
          <Route path='tutorial' element={<Tutorial />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
