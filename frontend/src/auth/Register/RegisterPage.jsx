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
import { Link } from "react-router-dom";


const initialValues = { cedula: '', nombre: '', apellido: '', email: '', nacionalidad: '', fecha: '', pais: '', usuario: '', clave: '', segClave: '', PreguntaUno: '', PreguntaDos: '', PreguntaTres: ' ', seguridadUno: '', seguridadDos: '', seguridadTres: '', facebook: '', instagram: '', x: '', tikTok: '' }
const RegisterPage = () => {
    const [currentStep, setCurrentStep] = useState(1);

    const { errors, touched, handleBlur, handleSubmit, handleChange, values } = useFormik({

        initialValues,
        onSubmit: async (values) => {
            const { data } = await axios.post('http://localhost:3000/api/auth', { data: values })

            console.log(data);

        },
        // validate: (values) => validateParticipant({ values })


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
                                {errors.cedula && touched.cedula || errors.password && touched.password ?
                                    <div className="w-full bg-red-600 pl-4 text-white rounded-[3px] py-1">
                                        {(errors.nombre && touched.nombre) && (<p>{errors.nombre}</p>)}
                                        {(errors.apellido && touched.apellido) && (<p>{errors.apellido}</p>)}
                                        {(errors.email && touched.email) && (<p>{errors.email}</p>)}
                                        {(errors.fecha && touched.fecha) && (<p>{errors.fecha}</p>)}
                                        {(errors.usuario && touched.usuario) && (<p>{errors.usuario}</p>)}
                                        {(errors.clave && touched.clave) && (<p>{errors.clave}</p>)}
                                        {(errors.segClave && touched.segClave) && (<p>{errors.segClave}</p>)}
                                        {(errors.PreguntaUno && touched.PreguntaUno) && (<p>{errors.PreguntaUno}</p>)}
                                        {(errors.PreguntaDos && touched.PreguntaDos) && (<p>{errors.PreguntaDos}</p>)}
                                        {(errors.PreguntaTres && touched.PreguntaTres) && (<p>{errors.PreguntaTres}</p>)}
                                        {(errors.seguridadUno && touched.seguridadUno) && (<p>{errors.seguridadUno}</p>)}
                                        {(errors.facebook && touched.facebook) && (<p>{errors.facebook}</p>)}
                                        {(errors.instagram && touched.instagram) && (<p>{errors.instagram}</p>)}
                                        {(errors.x && touched.x) && (<p>{errors.x}</p>)}
                                        {(errors.tikTok && touched.tikTok) && (<p>{errors.tikTok}</p>)}





                                    </div> : null}

                                {displayStep(currentStep)}
                            </StepperContext.Provider>
                        </div>
                        <p className="mt-5 text-center  opacity-60">Ya tienes una cuenta? <Link to={'/'} >Inicia sesión</Link></p>

                    </div>

                    <StepperControler
                        handleClick={handleClick}
                        currentStep={currentStep}
                        steps={steps}
                    />
                </section>
            </div>
        </LoginLayout>

    );
}

export default RegisterPage;

