import { Link } from "react-router-dom";
import { Button, Image } from "@nextui-org/react";

import { LayoutDashboard } from "../components/Navbar/Navbaar";

import icon from "../assets/home.jpeg";
import img2 from "../assets/img2.jpg";
import icon2 from "../assets/semana.webp";
import logo from "../assets/icon.png";
import icon3 from "../assets/sigea.webp";
import icon4 from "../assets/aula.webp";
import icon5 from "../assets/icons8-facebook.svg";
import icon6 from "../assets/icons8-whatsapp.svg";
import icon7 from "../assets/icons8-mail-100.png";
import icon8 from "../assets/icons8-x-100.png";



const Index = () => {
    return (
        <LayoutDashboard>
            <div className="flex flex-initial p-1 h-screen overflow-auto bg-white">
                <section className="flex p-1 h-screen rounded-2xl ">
                    <div>
                        <article className="flex flex-col justify-center items-center p-2 ">
                            <div >
                                <p className="text-2xl font-bold">PREINGRESO UNIVERSITARIO desde el 02/12/2024 al 17/01/2025 (plazo extendido)</p>
                            </div>
                            <div className="flex flex-col justify-center items-center ">
                                <Image src={icon} width={700} height={500} />
                                <Link>
                                    <p className="text-xl p-2 hover:text-red-600">Detalles del Proceso ¡Presiona AQUÍ!</p>
                                </Link>
                            </div>
                        </article>

                        <article className="flex flex-col justify-center items-center p-2 ">
                            <p className="text-2xl font-bold">CELEBREMOS JUNTOS NUESTRO 26° ANIVERSARIO…»con el corazón en Catia»</p>

                            <div className="flex flex-col justify-center items-center ">
                                <Image src={icon2} width={700} height={500} />
                                <Link>
                                    <p className="text-xl p-2 hover:text-red-600">Detalles del Proceso ¡Presiona AQUÍ!</p>
                                </Link>
                            </div>
                        </article>
                        <article>
                            <div >
                                <p className="text-2xl font-bold">BIENVENIDOS AL PERÍODO II-2024 / OCTUBRE 2024 - FEBRERO 2025</p>
                            </div>
                            <div className="flex flex-col justify-center items-center ">
                                <Image src={img2} width={700} height={500} />
                            </div>
                        </article>
                    </div>
                    <aside className="flex flex-col p-1 w-1/4 max-h-screen min-h-screen  ">
                        <div>
                            <div className="bg-red-600 p-1 rounded-lg text-white">
                                <p>FOC - COORDINACIÓN DE FORMACIÓN COMPLEMENTARIA</p>
                            </div>
                            <ul className="flex flex-col p-2 px-4 gap-2 ">

                                <li className="text-sm">
                                    Programación Permanente
                                </li>
                                <li className=" text-sm ">
                                    (FOC) Registro de Actividad - Certificados internos y externos
                                </li>
                            </ul>
                        </div>
                        <div >
                            <div>
                                <div className="bg-red-600 p-1 rounded-lg text-white">
                                    <p>CEP -COORDINACIÓN DE EXTENSIÓN PROFESIONAL</p>

                                </div>
                                <div className="flex flex-col justify-center items-center p-2">
                                    <Image src={logo} />

                                    <Link className="">
                                        <p className="text-sm p-2 hover:text-red-600">Programación permanente de cursos</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="w-full">
                            <div>
                                <div className="bg-red-600 p-2 rounded-lg text-white">
                                    <p>SIGEA - SISTEMA DE GESTIÓN ACADÉMICA</p>

                                </div>
                                <div className="flex flex-col justify-center items-center p-2">
                                    <Image src={icon3} />
                                    <Link to='http://caracas.iujo.edu.ve/sigea/'>
                                        <p className="text-sm p-2 hover:text-red-600">Entrar al SIGEA - Sistema de Gestión Académica</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="bg-red-600 p-2 rounded-lg text-white w-full">
                                <p>Entrar al SIGEA - Sistema de Gestión Académica</p>
                            </div>

                            <div className="flex flex-col justify-center items-center p-2">
                                <Image src={icon4} />
                                <Link to='https://aulaccs.iujoac.org.ve'>
                                    <p className="text-sm p-2 hover:text-red-600">Entorno Virtual de Aprendizaje (EVA) IUJO Caracas</p>
                                </Link>
                            </div>
                        </div>

                        <div className="w-full">
                            <div className="bg-red-600 p-1 rounded-lg text-white w-full">
                                <p>Oferta Académica</p>
                            </div>
                            <ul className="flex flex-col p-2 px-4 gap-2 ">
                                <Link to='https://webiujocatia.wordpress.com/carreras-ofertadas/'>
                                    <li className="text-sm hover:text-red-600">Carreras Ofertadas</li>
                                </Link>
                                <Link to='https://webiujocatia.wordpress.com/pensa-de-estudio/'>
                                    <li className=" text-sm hover:text-red-600">Pensa de Estudio</li>
                                </Link>
                                <Link to='https://webiujocatia.wordpress.com/wp-content/uploads/2015/01/reglamento-interno-de-evaluacic3b3n-iujo-dic2014.pdf'>
                                    <li className=" text-sm hover:text-red-600">Reglamento Interno de Evaluación</li>
                                </Link>
                            </ul>
                        </div>
                        <div className="w-full">
                            <div className="bg-red-600 p-1 rounded-lg text-white">
                                <p>Organización</p>
                            </div>
                            <ul className="flex flex-col p-2 px-4 gap-2 ">
                                <Link to='/nosotros'>
                                    <li className="text-sm hover:text-red-600">Historia del IUJO</li>
                                </Link>
                                <Link to='https://webiujocatia.wordpress.com/estructura-organizativa/'>
                                    <li className=" text-sm hover:text-red-600">Estructura Organizativa</li>
                                </Link>
                                <Link to='https://webiujocatia.wordpress.com/direccion-nacional-de-educacion-superior-de-fe-y-alegria/'>
                                    <li className=" text-sm hover:text-red-600">Dirección de Educación Universitaria de Fe y Alegría</li>
                                </Link>
                            </ul>
                        </div>
                        <div className="w-full ">
                            <ul className="flex justify-center items-center gap-3">
                                <Link className="flex justify-center items-center ">
                                    <Image src={icon8} width={40} />
                                </Link>
                                <Link className="flex justify-center items-center ">
                                    <Image src={icon7} width={40} />
                                </Link>
                                <Link className="flex justify-center items-center ">
                                    <Image src={icon5} width={40} />

                                </Link>
                                <Link className="flex justify-center items-center ">
                                    <Image src={icon6} width={40} />

                                </Link>
                            </ul>
                        </div>

                    </aside>
                </section>


            </div >

        </LayoutDashboard >
    );
}

export default Index;
