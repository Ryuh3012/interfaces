import { Button, Image, Input } from "@nextui-org/react";
import { useFormik } from "formik";
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'

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

    const [errorInternal, setErrorInternal] = useState(null)
    const [message, setMessage] = useState([])

    const { errors, touched, handleBlur, handleSubmit, handleChange, values: { usuario, clave } } = useFormik({

        initialValues,
        onSubmit: async (value) => {
            try {

                // INGLES ESPAÑOOL ..................
                const { data } = await axios.post('http://localhost:3000/api/auth/singIn', { user: value })
                console.log(data);
                if (data?.length !== 0) {
                    const cookis = new Cookies()

                    cookis.remove('user')
                    cookis.set('user', JSON.stringify(data.message))

                    setMessage(data.messager)
                    setTimeout(() => {
                        setMessage(null)
                        return navegation('/index')
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
                                    <div className="w-full bg-red-600 pl-4 text-white rounded-[3px] py-1">
                                        {(errors.usuario && touched.usuario) && (<p>{errors.usuario}</p>)}
                                        {(errors.clave && touched.clave) && (<p>{errors.clave}</p>)}
                                        {errorInternal && (<p>{errorInternal}</p>)}
                                    </div> : null}

                                {message.length !== 0 ?
                                    (<p className="w-full bg-green-600 pl-4 text-black rounded-[3px] py-1">{message}</p>)
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
                                            <Button type="submit" className="bg-[#8C113E] text-slate-400 uppercase w-full p-6 rounded-xl font-semibold cursor-pointer hover:bg-[#6A2473] text-white transition duration-2oo ease-in-out">
                                                inciar Sesión
                                            </Button>

                                        </div>
                                        <div className="flex justify-between">

                                            <p className="mt-5 text-center  opacity-60">¿No tienes una cuenta? <Link to={'/register'}>Regístrate</Link></p>
                                            <p className="mt-5 text-center  opacity-60 "><Link to={'/recuperar'}>¿Olvidaste tu contraseña?</Link></p>
                                        </div>

                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </LoginLayout>
    );
}

export default LoginPage;
