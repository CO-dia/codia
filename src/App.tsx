import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Layout from './components/Layout';
import Contact from './pages/Contact';
import Tutorial from './pages/Tutorial';
import Buy from './pages/Buy';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='contact' element={<Contact />} />
                    <Route path='tutorial' element={<Tutorial />} />
                    <Route path='buy' element={<Buy />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
