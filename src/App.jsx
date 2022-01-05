import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import ProdForm from './components/ProdForm';
import EditProd from './components/EditProd';

function App() {
    return (
        <BrowserRouter>
            <div>
                <div>
                    <Navbar />
                </div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/create" element={<ProdForm />} />
                    <Route path="/edit/:id" element={<EditProd />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
