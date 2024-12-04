import { Navigate, Route, Routes, BrowserRouter } from 'react-router-dom';

import LoginPage from './auth/Login/LoginPage';
import RegisterPage from './auth/Register/RegisterPage';
import Index from './Pages/Index';
import ClavePage from './auth/recuperaClave.jsx/ClavePage';



const Navegation = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<LoginPage />} path='/' />
                <Route element={<RegisterPage />} path='/register' />
                <Route element={<ClavePage />} path='/recuperar' />
                <Route element={<Index />} path='/Index' />
                <Route path="*" element={<Navigate to={'/'} replace={true} />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Navegation;
