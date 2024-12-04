import { Button, Image, Input } from "@nextui-org/react";
import { useFormik } from "formik";
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'

import axios from "axios";
// import Cookies from 'universal-cookie';

import LoginLayout from "../LoginLayout";
// import { loginValidate } from "../../segurity/Login/ValidateLogin.mjs";

import img from "../../assets/img.jpg";
import iujo from "../../assets/IUJO.gif";

const initialValues = { cedula: '', password: '' }

const LoginPage = () => {
    // const navegation = useNavigate()

    const [errorInternal, setErrorInternal] = useState(null)

    const { errors, touched, handleBlur, handleSubmit, handleChange, values: { usuario, clave } } = useFormik({

        initialValues,
        onSubmit: async (value) => {
            try {

                // INGLES ESPAÑOOL ..................

                const { data } = await axios.post('http://localhost:3000/auth', { user: value })
                // if (data?.length !== 0) {
                //     const cookis = new Cookies()
                //     cookis.set('users', JSON.stringify(data?.res[0]))
                //     // return navegation('/index')
                // }
            }
            catch ({ response: { data: { res } } }) {
                setErrorInternal(res)
                setTimeout(() => {
                    setErrorInternal(null)
                }, 3000);
            }

        },
        // validate: (values) => loginValidate({ values })

    })

    return (
        <LoginLayout>
            <section className="flex justify-center items-center w-full h-full">
                <div className="container flex w-4/5 h-[70%] justify-between bg-white rounded-3xl shadow-2xl">
                    <Image src={img} className="h-full lg:w-full lg:block sm:hidden" />
                    <div className="h-full shadow-2xl ">
                        <div className="flex flex-col h-full rounded-3xl ">
                            <div className="w-full flex justify-end p-5 px-3">
                                <Image src={iujo} className="w-[150px]" />1
                            </div>
                            <div className="flex flex-col h-full justify-center items-center">
                                <div className="p-5 text-center">
                                    <p className="text-xl font-semibold font-mono">Bienvenido A La Coordinación de Extensión Profesional</p>

                                </div>
                                {errors.cedula && touched.cedula || errors.password && touched.password || errorInternal ?
                                    <div className="w-full bg-red-600 pl-4 text-white rounded-[3px] py-1">
                                        {(errors.usuario && touched.usuario) && (<p>{errors.usuario}</p>)}
                                        {(errors.clave && touched.clave) && (<p>{errors.clave}</p>)}
                                        {errorInternal && (<p>{errorInternal}</p>)}
                                    </div> : null}

                                <div className="w-full p-5">
                                    <form onSubmit={handleSubmit}>
                                        <div className="flex flex-col gap-2">

                                            <Input
                                                type="number"
                                                id="cedula"
                                                variant='faded'
                                                label="Usuario"
                                                name="usuario"
                                                inputMode="numeric"
                                                pattern="/[^0-9]*$/"
                                                value={usuario}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                required={true}
                                            />
                                            <Input
                                                type="password"
                                                variant='faded'
                                                label="contraseña"
                                                name="clave"
                                                value={clave}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                required={true}
                                            />
                                        </div>
                                        <div className="py-5">
                                            <Button type="submit" className="bg-[#8C113E] text-slate-400 uppercase w-full p-6 rounded-xl font-semibold cursor-pointer  hover:bg-[#6A2473] hover:text-white transition duration-2oo ease-in-out">
                                                inciar Sesion
                                            </Button>

                                        </div>
                                        <p className="mt-5 text-center  opacity-60">¿No tienes una cuenta? <Link to={'/register'}>Registrate</Link></p>

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
