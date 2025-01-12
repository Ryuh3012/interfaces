import { Button, Image, Input } from "@nextui-org/react";
import { useFormik } from "formik";
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import CryptoJS from "crypto-js";


import axios from "axios";
import Cookies from 'universal-cookie';

import LoginLayout from "../LoginLayout";
// import { loginValidate } from "../../segurity/Login/ValidateLogin.mjs";

import img from "../../assets/img.jpg";
import iujo from "../../assets/IUJO.gif";
import { loginValidate } from "../../seguridad/validacionLogin.mjs";

const initialValues = { usuario: '', clave: '' }

const LoginPage = () => {
    const navegation = useNavigate()

    const [errorInternal, setErrorInternal] = useState('')
    const [message, setMessage] = useState('')


    const { errors, touched, handleBlur, handleSubmit, handleChange, values: { usuario, clave } } = useFormik({

        initialValues,
        onSubmit: async (value) => {
            try {
                // INGLES ESPAÑOOL ..................
                const { data } = await axios.post('http://localhost:3000/api/auth/singIn', { user: value })
                if (data?.length !== 0) {
                    const cookis = new Cookies()
                    const cripto = CryptoJS.AES.encrypt(JSON.stringify(data.user), 'hola').toString()

                    cookis.remove('user')
                    cookis.set('user', JSON.stringify(cripto))
                    setMessage(data.messager)
                    setTimeout(() => {
                        setMessage('')
                        return navegation('/')
                    }, 3000);
                }
            }
            catch ({ response: { data: { messager } } }) {
                setErrorInternal(messager)
                setTimeout(() => {
                    setErrorInternal(null)
                }, 3000);
            }

        },
        validate: values => loginValidate({ values })

    })
    return (
        <LoginLayout>
            <section className="flex justify-center items-center w-full h-full">
                <div className="container flex w-4/5 h-[70%] justify-between bg-white rounded-3xl shadow-2xl">
                    <Image src={img} className="h-full lg:w-full lg:block sm:hidden" />
                    <div className="h-full shadow-2xl ">
                        <div className="flex flex-col h-full rounded-3xl ">
                            <div className="w-full flex justify-end p-5 px-3">
                                <Image src={iujo} className="w-[150px]" />
                            </div>
                            <div className="flex flex-col h-full justify-center items-center">
                                <div className="p-5 text-center">
                                    <p className="text-xl font-semibold font-mono">Bienvenido A La Coordinación de Extensión Profesional</p>

                                </div>
                                {errors.usuario && touched.usuario || errors.clave && touched.clave || errorInternal ?
                                    <div className="flex flex-col w-full justify-center items-center py-1 pl-4 text-danger-600 bg-danger-50 ">

                                        {(errors.usuario && touched.usuario) && (<p>{errors.usuario}</p>)}
                                        {(errors.clave && touched.clave) && (<p>{errors.clave}</p>)}
                                        {errorInternal && (<p>{errorInternal}</p>)}
                                    </div>
                                    : null}

                                {message.length !== 0 ?
                                    <div className="flex flex-col w-full justify-center items-center py-1 pl-4 text-success-700 dark:text-success bg-success-50">
                                        <p>
                                            {message}
                                        </p>
                                    </div>
                                    : null}   {message.length !== 0 ?
                                    <div className="flex flex-col w-full justify-center items-center py-1 pl-4 text-success-700 dark:text-success bg-success-50">
                                        <p>
                                            {message}
                                        </p>
                                    </div>
                                    : null}
                                <div className="w-full p-5">
                                    <form onSubmit={handleSubmit}>
                                        <div className="flex flex-col gap-2">

                                            <Input
                                                type="text"
                                                variant='faded'
                                                label="Usuario"
                                                name="usuario"
                                                value={usuario}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                required={true}
                                                placeholder="Introduce Tu Usuario "
                                            />
                                            <Input
                                                type="password"
                                                variant='faded'
                                                label="Contraseña"
                                                name="clave"
                                                value={clave}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                required={true}
                                                placeholder="Introduce Tu Contraseña"
                                            />
                                        </div>
                                        <div className="py-5">
                                            <Button type="submit" className="bg-[#8C113E] text-slate-400 uppercase w-full p-6 rounded-xl font-semibold cursor-pointer hover:bg-[#6A2473] transition duration-2oo ease-in-out hover:text-white ">
                                                inciar Sesión
                                            </Button>

                                        </div>
                                        <div className="flex justify-between">

                                            <p className="mt-5 text-center opacity-60 hover:-translate-y-1 ">¿No tienes una cuenta? <Link className="hover:text-red-700 " to={'/register'}>Regístrate</Link></p>
                                            <p className="mt-5 text-center hover:text-red-700 hover:opacity-100 opacity-60 hover:-translate-y-1 "><Link to={'/recuperar'}>¿Olvidaste tu contraseña?</Link></p>
                                        </div>

                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </LoginLayout >
    );
}

export default LoginPage;
