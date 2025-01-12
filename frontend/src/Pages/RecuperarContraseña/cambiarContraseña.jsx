import { Button, Image, Input } from '@nextui-org/react';

import { useFormik } from "formik";
import { data, Link, useNavigate, useNavigation } from 'react-router-dom'
import CryptoJS from "crypto-js";


import axios from 'axios';
import LoginLayout from '../../auth/LoginLayout';
import Cookies from 'universal-cookie';
import { newPassword } from '../../seguridad/newPassword.mjs';
import { useState } from 'react';

const initialValues = { newClave: '', repitClave: '' }

const ClavePage = () => {

    const [messager, setMessager] = useState([]);
    const [ErrorInternal, setErrorInternal] = useState([]);
    const navegation = useNavigate()


    const cookis = new Cookies()
    const { errors, touched, handleBlur, handleSubmit, handleChange, values: { newClave, repitClave } } = useFormik({
        initialValues,
        onSubmit: async (value) => {
            try {


                const token = cookis.get('token')
                const bytes = CryptoJS.AES.decrypt(token, 'hola');
                const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8))

                const { data } = await axios.put('http://localhost:3000/reset-passowrd', { newPassword: value.newClave }, {
                    headers: {
                        'Authorization': decryptedData
                    }
                })
                if (data.length !== 0) {
                    setMessager(data.msg)
                    setTimeout(() => {
                        setMessager([])
                        return navegation('/login')

                    }, 3000);
                }
            } catch ({ response: { data: { msg } } }) {
                setErrorInternal(msg)
                setTimeout(() => {
                    setErrorInternal([])
                    navegation('/login')
                }, 3000);
            }


        },
        validate: (values) => newPassword({ values })

    })

    return (
        <LoginLayout>
            <section className="flex justify-center items-center w-full h-full">
                <div className="container flex w-1/2 h-[70%] justify-between bg-white rounded-3xl shadow-2xl">
                    <div className="h-full w-full shadow-2xl ">

                        <div className="flex flex-col h-full w-full rounded-3xl ">

                            <div className="flex flex-col h-full w-full justify-center items-center">
                                <div className="p-5 text-center">
                                    <p className="text-xl font-semibold font-mono">Nueva Clave</p>
                                </div>
                                {errors.newClave && touched.newClave || errors.repitClave && touched.repitClave || ErrorInternal.length !== 0 ?

                                    <div className="flex flex-col w-full justify-center items-center py-1 pl-4 text-danger-600 bg-danger-50 ">
                                        {(errors.newClave && touched.newClave) && (<p>{errors.newClave}</p>)}
                                        {(errors.repitClave && touched.repitClave) && (<p>{errors.repitClave}</p>)}
                                        {(ErrorInternal) && (<p>{ErrorInternal}</p>)}

                                    </div>

                                    : null}
                                {messager.length !== 0 ?
                                    <div className="flex flex-col w-full justify-center items-center py-1 pl-4 text-success-700 dark:text-success bg-success-50">
                                        <p>
                                            {messager}
                                        </p>
                                    </div>
                                    : null}
                                <div className="w-full p-5">

                                    <form onSubmit={handleSubmit}>
                                        <div className="lg:flex w-full gap-3">



                                            <div className='flex flex-col w-full gap-2'>
                                                <Input
                                                    type="password"
                                                    variant='faded'
                                                    label="Nueva contraseña"
                                                    name="newClave"
                                                    value={newClave}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    required={true}
                                                />
                                            </div>

                                            <div className='flex flex-col w-full gap-2'>

                                                <Input
                                                    type="password"
                                                    variant='faded'
                                                    label="Repita La Contraseña Contraseña"
                                                    name="repitClave"
                                                    value={repitClave}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    required={true}
                                                />

                                            </div>

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
