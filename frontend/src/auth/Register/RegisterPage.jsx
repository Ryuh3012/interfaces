import { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";

import StepperControler from "../../components/StepperControler";
import Stepper from "../../components/Stepper";
import { StepperContext } from "../../contexts/StepperContext";

import Peoples from "../../components/formulary/StepperFormulary/Peoples";
import User from "../../components/formulary/StepperFormulary/User";
import Social from "../../components/formulary/StepperFormulary/Social";
import Segurity from "../../components/formulary/StepperFormulary/Segurity";
import LoginLayout from "../LoginLayout";
import { Link, useNavigate, } from "react-router-dom";
import { registroValidate } from "../../seguridad/registroValidate.mjs";


const initialValues = { cedula: '', nombre: '', apellido: '', email: '', nacionalidad: '', fecha: '', pais: '', usuario: '', clave: '', segClave: '', preguntaUno: '', preguntaDos: "", preguntaTres: '', seguridadUno: '', seguridadDos: '', seguridadTres: '', facebook: '', instagram: '', x: '', tikTok: '' }
const RegisterPage = () => {
    const navegation = useNavigate()

    const [currentStep, setCurrentStep] = useState(1);
    const [messager, setMessager] = useState('');
    const [errorInternal, setErrorInternal] = useState('');

    const { errors, touched, handleBlur, handleSubmit, handleChange, values } = useFormik({

        initialValues,
        onSubmit: async (values) => {
            try {
                const { data: { messager } } = await axios.post('http://localhost:3000/api/auth/singUp', { data: values })
                setMessager(messager)
                setTimeout(() => {
                    setMessager('')
                    return navegation('/login')
                }, 3000);

            }
            catch ({ response: { data: { messager } } }) {
                setErrorInternal(messager)
                setTimeout(() => {
                    setErrorInternal(null)
                }, 3000);
            }

        },
        validate: (values) => registroValidate({ values })


    })

    const steps = ['Datos Personales', 'Usuario', 'Pregunta De Seguridad', 'Redes Sociales']

    const displayStep = (step) => {
        switch (step) {
            case 1:
                return < Peoples />;
            case 2:
                return < User />;
            case 3:
                return < Segurity />
            case 4:
                return < Social />;
        }

    }
    const handleClick = (direction) => {
        let newStep = currentStep
        direction == "next" ? newStep++ : newStep--;
        newStep > 0 && newStep <= steps.length && setCurrentStep(newStep)
    }



    return (
        <LoginLayout>

            <div className="flex justify-center items-center h-screen ">
                <section className="shadow-xl  rounded-2xl pb-2 bg-white flex flex-col sm:w-[70%] lg:w-1/2">
                    <div className="container horizontal mt-5">
                        <Stepper
                            steps={steps}
                            currentStep={currentStep}
                        />
                        <div className="my-10 p-10">



                            <StepperContext.Provider value={{
                                handleBlur,
                                handleSubmit, handleChange,
                                values
                            }}>
                                {errors.nombre && touched.nombre || errors.apellido && touched.apellido || errors.email && touched.email ||
                                    errors.fecha && touched.fecha ||
                                    errors.cedula && touched.cedula ||
                                    errors.usuario && touched.usuario ||
                                    errors.clave && touched.clave ||
                                    errors.segClave && touched.segClave ||
                                    errors.preguntaUno && touched.preguntaUno ||
                                    errors.seguridadUno && touched.seguridadUno
                                    || errorInternal ?
                                    <div className="flex flex-col w-full px-1 justify-center items-center py-1 pl-4 text-danger-600 dark:text-danger-500 bg-danger-50 dark:bg-danger-50/50 ">
                                        {(errors.nombre && touched.nombre) && (<p>{errors.nombre}</p>)}
                                        {(errors.apellido && touched.apellido) && (<p>{errors.apellido}</p>)}
                                        {(errors.cedula && touched.cedula) && (<p>{errors.cedula}</p>)}
                                        {(errors.email && touched.email) && (<p>{errors.email}</p>)}
                                        {(errors.fecha && touched.fecha) && (<p>{errors.fecha}</p>)}
                                        {(errors.usuario && touched.usuario) && (<p>{errors.usuario}</p>)}
                                        {(errors.clave && touched.clave) && (<p>{errors.clave}</p>)}
                                        {(errors.segClave && touched.segClave) && (<p>{errors.segClave}</p>)}
                                        {(errors.seguridadUno && touched.seguridadUno) && (<p>{errors.seguridadUno}</p>)}
                                        {(errors.preguntaUno && touched.preguntaUno) && (<p>{errors.preguntaUno}</p>)}
                                        {errorInternal && (<p>{errorInternal}</p>)}
                                    </div> : null}

                                {messager.length != 0 ?
                                    <div className="flex flex-col w-full justify-center items-center py-1 pl-4 text-success-700 dark:text-success bg-success-50">

                                        <p>
                                            {messager}
                                        </p>
                                    </div>
                                    : null}
                                {displayStep(currentStep)}
                            </StepperContext.Provider>
                        </div>
                        <p className="mt-5 text-center py1 opacity-60">Ya tienes una cuenta? <Link className="hover:text-red-700" to={'/login'} >Inicia sesión</Link></p>

                    </div>

                    <StepperControler
                        handleClick={handleClick}
                        currentStep={currentStep}
                        steps={steps}
                    />
                </section>
            </div >
        </LoginLayout >

    );
}

export default RegisterPage;

