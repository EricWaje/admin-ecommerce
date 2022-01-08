import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer';
import Home from './components/Home/Home';
import ProdForm from './components/ProdForm';
import EditProd from './components/EditProd';
import Login from './components/Login';

function App() {
    return (
        <BrowserRouter>
            <div>
                <div>
                    <Navbar />
                </div>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/create" element={<ProdForm />} />
                    <Route path="/edit/:id" element={<EditProd />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
