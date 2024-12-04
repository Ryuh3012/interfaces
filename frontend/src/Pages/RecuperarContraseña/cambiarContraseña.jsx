import { Button, Image, Input } from '@nextui-org/react';

import { useFormik } from "formik";
import { Link, useNavigate } from 'react-router-dom'

import axios from 'axios';
import LoginLayout from '../../auth/LoginLayout';
import Cookies from 'universal-cookie';

const initialValues = { newClave: '' }

const ClavePage = () => {

    const cookis = new Cookies()
    // console.log(cookis.get('user'))
    const { errors, touched, handleBlur, handleSubmit, handleChange, values: { newClave } } = useFormik({
        initialValues,
        onSubmit: async (value) => {
            try {
                const user =  cookis.get('user')
                const { data } = await axios.post('http://localhost:3000/clave', { user: {value , user} })


            }
            catch ({ response: { data: { res } } }) {
                console.log(res);
                // setErrorInternal(res)
                // setTimeout(() => {
                //     setErrorInternal(null)
                // }, 3000);
            }

        },
        // validate: (values) => loginValidate({ values })

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
                                {/* {errors.cedula && touched.cedula || errors.password && touched.password || errorInternal ?
                                    <div className="w-full bg-red-600 pl-4 text-white rounded-[3px] py-1">
                                        {(errors.usuario && touched.usuario) && (<p>{errors.usuario}</p>)}
                                        {(errors.clave && touched.clave) && (<p>{errors.clave}</p>)}
                                        {errorInternal && (<p>{errorInternal}</p>)}
                                    </div> : null} */}

                                <div className="w-full p-5">
                                    <form onSubmit={handleSubmit}>
                                        <div className="flex flex-col gap-2">

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
