import { Navigate, Route, Routes, BrowserRouter } from 'react-router-dom';

import LoginPage from './auth/Login/LoginPage';
import RegisterPage from './auth/Register/RegisterPage';
import Index from './Pages/Index';
import ClavePage from './auth/recuperaClave.jsx/ClavePage';
import CambiarContraseña from './Pages/RecuperarContraseña/cambiarContraseña';
import ContactoPage from './Pages/contacto/ContactoPage';
import NosotrosPage from './Pages/Nosotros/NosotrosPage';



const Navegation = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Index />} path='/' />
                <Route element={<ContactoPage />} path='/contact' />
                <Route element={<NosotrosPage />} path='/nosotros' />
                <Route element={<LoginPage />} path='/Login' />
                <Route element={<RegisterPage />} path='/register' />
                <Route element={<ClavePage />} path='/recuperar' />
                <Route element={<CambiarContraseña />} path='/cambiar' />
                <Route path="*" element={<Navigate to={'/'} replace={true} />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Navegation;
