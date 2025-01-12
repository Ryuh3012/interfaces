import { Button, Image, Input } from '@nextui-org/react';
import LoginLayout from '../LoginLayout';
import { useFormik } from "formik";
import { Link, useNavigate } from 'react-router-dom'

// import { loginValidate } from "../../segurity/Login/ValidateLogin.mjs";

import img from "../../assets/img.jpg";
import iujo from "../../assets/IUJO.gif";
import axios from 'axios';
import Cookies from 'universal-cookie';
import CryptoJS from "crypto-js";

import { useState } from 'react';

const initialValues = { email: '' }

const ClavePage = () => {
    const [messager, setMessager] = useState([])
    const [errorInternal, setErrorInternal] = useState([]);
    const navegation = useNavigate()

    const { handleBlur, handleSubmit, handleChange, values: { email } } = useFormik({
        initialValues,
        onSubmit: async ({ email }) => {
            try {
                // INGLES ESPAÑOOL ..................
                const { data } = await axios.post(`http://localhost:3000/renover/${email}`)
                if (data?.length !== 0) {
                    const cokis = new Cookies()

                    if (cokis.set('token')) cokis.remove('token')

                    const cripto = CryptoJS.AES.encrypt(JSON.stringify(data.token), 'hola').toString()

                    cokis.set('token', JSON.stringify(cripto))

                    setMessager(data.msg)
                    setTimeout(() => {
                        setMessager([])
                        return navegation('/login')
                    }, 3000);

                }
            }
            catch ({ response: { data: { msg } } }) {
                console.log(msg);
                setErrorInternal(msg)
                setTimeout(() => {
                    setErrorInternal([])
                    return navegation('/login')
                }, 3000);
            }

        }
    })
    return (
        <LoginLayout>
            <section className="flex justify-center items-center w-full h-full">
                <div className="container flex w-4/5 h-[70%] justify-between bg-white rounded-3xl shadow-2xl">
                    <Image src={img} className="h-full lg:w-full lg:block sm:hidden" />
                    <div className="h-full w-[60%] shadow-2xl ">
                        <div className="flex flex-col h-full w-full rounded-3xl ">
                            <div className="w-full flex justify-end p-5 px-3">
                                <Image src={iujo} className="w-[150px]" />
                            </div>
                            <div className="flex flex-col h-full w-full justify-center items-center">
                                <div className="p-5 text-center">
                                    <p className="text-xl font-semibold font-mono">Recuperar Contraseña</p>
                                </div>
                                {messager.length !== 0 ?

                                    <div className="flex flex-col w-full justify-center items-center py-1 pl-4 text-success-700 dark:text-success bg-success-50">

                                        <p> {messager} </p>
                                    </div> : null}
                                {errorInternal.length !== 0 ?
                                    <div className="flex  flex-col w-full justify-center items-center py-1 pl-4 text-danger-600 dark:text-danger-500 bg-danger-50 dark:bg-danger-50/50 ">

                                        <p> {errorInternal} </p>
                                    </div> : null}

                                <div className="w-full p-5">
                                    <form onSubmit={handleSubmit}>


                                        <div className="flex flex-col gap-2">

                                            <Input
                                                type="email"
                                                variant='faded'
                                                label="Correo"
                                                name="email"
                                                value={email}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                required={true}
                                            />

                                        </div>
                                        <div className="py-5">
                                            <Button type="submit" className="bg-[#8C113E] text-slate-400 uppercase w-full p-6 rounded-xl font-semibold cursor-pointer  hover:bg-[#6A2473] hover:text-white transition duration-2oo ease-in-out">
                                                Enviar
                                            </Button>

                                        </div>
                                        <div className='flex justify-center items-center h-full w-full '>
                                            <Link to={'/login'}>
                                                <Button className="mt-5 text-center opacity-60   hover:-translate-y-1">atras</Button>
                                            </Link>
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

export default ClavePage;
