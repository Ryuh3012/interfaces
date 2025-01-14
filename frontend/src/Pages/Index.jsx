import { Link } from "react-router-dom";
import { Image } from "@nextui-org/react";

import { LayoutDashboard } from "../components/Navbar/Navbaar";

import icon from "../assets/home.jpeg";
import img2 from "../assets/img2.jpg";
import icon2 from "../assets/semana.webp";




const Index = () => {

    return (
        <LayoutDashboard>
            <div >
                <div className="flex">
                    <main className="flex flex-initial bg-white h-screen ">
                        <div>
                            <article className="flex flex-col justify-center items-center p-2 ">
                                <div >
                                    <p className="text-2xl font-bold">PREINGRESO UNIVERSITARIO desde el 02/12/2024 al 17/01/2025 (plazo extendido)</p>
                                </div>
                                <div className="flex flex-col justify-center items-center p-2">
                                    <Image src={icon} width={700} height={500} />
                                    <Link>
                                        <p className="text-xl p-2 hover:text-red-600">Detalles del Proceso ¡Presiona AQUÍ!</p>
                                    </Link>
                                </div>
                            </article>

                            <article className="flex flex-col justify-center items-center p-2 ">
                                <p className="text-2xl font-bold">CELEBREMOS JUNTOS NUESTRO 26° ANIVERSARIO…»con el corazón en Catia»</p>

                                <div className="flex flex-col justify-center items-center p-2">
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
                                <div className="flex flex-col justify-center items-center p-2">
                                    <Image src={img2} width={700} height={500} />
                                </div>
                            </article>
                        </div>



                    </main>
                </div>
            </div>

        </LayoutDashboard >
    );
}

export default Index;
