import Cookies from 'universal-cookie';

import { Button, Image, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react"
import Icon from "../../assets/icon2.png"
import { NavLink } from "react-router-dom"



export const LayoutDashboard = ({ children }) => {
    const cookies = new Cookies();
    const user = cookies.get('user')



    return (
        <div className="flex flex-col h-screen bg-[#d9dbe0]">
            <Navbar isBordered className="bg-[#2A398C] text-white ">

                <Image src={Icon} width={50} />
                <NavbarBrand>
                    <p className="font-semibold text-sm ">COORDINACIÓN DE EXTENSIÓN PROFESIONAL</p>
                </NavbarBrand>

                <NavbarContent className="hidden sm:flex gap-5" justify="end">
                    <NavbarItem>
                        <NavLink end to="/" className={({ isActive }) => isActive ? 'text-lg font-bold' : 'font-light'} >
                            Inicio
                        </NavLink>
                    </NavbarItem>
                    <NavbarItem>
                        <NavLink end to="/blog" className={({ isActive }) => isActive ? 'text-lg font-bold' : 'font-light '} >
                            blog
                        </NavLink>
                    </NavbarItem>
                    <NavLink end to="/nosotros" className={({ isActive }) => isActive ? 'text-lg font-bold ' : 'font-light'} >
                        Nosotros
                    </NavLink>
                    <NavbarItem>
                        <NavLink end to="/contact" className={({ isActive }) => isActive ? 'text-lg font-bold' : 'font-light'} >
                            Contáctanos
                        </NavLink>
                    </NavbarItem>

                </NavbarContent>
                {!user ?
                    <NavbarItem end >
                        <Button>
                            <NavLink to="/contactos">
                                Inicio session
                            </NavLink>
                        </Button>
                    </NavbarItem>
                    :
                    <NavbarItem>
                        <Button className="text-white font-light rounded p-2" radius="sm" variant="light">
                            {user.nombre}
                        </Button>
                    </NavbarItem>
                }

            </Navbar>

            {children}


        </div>
    )
}
