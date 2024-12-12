import { Button, Image, Input } from '@nextui-org/react';
import LoginLayout from '../LoginLayout';
import { useFormik } from "formik";
import { Link, useNavigate } from 'react-router-dom'

// import { loginValidate } from "../../segurity/Login/ValidateLogin.mjs";

import img from "../../assets/img.jpg";
import iujo from "../../assets/IUJO.gif";
import axios from 'axios';
import Cookies from 'universal-cookie';
import { useState } from 'react';

const initialValues = { email: '' }

const ClavePage = () => {
    const [message, setMessage] = useState([])
    const [errorInternal, setErrorInternal] = useState([]);
    const navegation = useNavigate()

    const { handleBlur, handleSubmit, handleChange, values: { email } } = useFormik({
        initialValues,
        onSubmit: async (value) => {
            try {

                // INGLES ESPAÑOOL ..................

                const { data } = await axios.post('http://localhost:3000/api/password/recuperar', { user: value })
                if (data?.length !== 0) {
                    const cookis = new Cookies()
                    cookis.remove('user')
                    cookis.set('user', JSON.stringify(data.resp))
                    setMessage(data.messager)
                    setTimeout(() => {
                        setMessage(null)
                        return navegation('/')
                    }, 3000);
                }

            }
            catch ({ response: { data: { messager } } }) {
                console.log(messager);
                setErrorInternal(messager)
                setTimeout(() => {
                    setErrorInternal([])
                }, 3000);
            }

        },
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
                                {message.length !== 0 ?
                                    <div className="w-full bg-green-600 pl-4 text-white rounded-[3px] py-1">
                                        <p> {message} </p>
                                    </div> : null}
                                {errorInternal.length !== 0 ?
                                    <div className="w-full bg-red-600 pl-4 text-white rounded-[3px] py-1">
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
                                            <p className="mt-5 text-center opacity-60 hover:rounded hover:border-2 hover:border-slate-500 hover:p-2"><Link to={'/'}>atras</Link></p>
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
