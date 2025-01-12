import Cookies from 'universal-cookie';
import CryptoJS from "crypto-js";

import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Image, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react"
import Icon from "../../assets/icon2.png"
import { NavLink, useNavigate } from "react-router-dom"
import Asident from '../asiden/Asident';



export const LayoutDashboard = ({ children }) => {

    const navegation = useNavigate()
    const cookies = new Cookies();
    const user = cookies.get('user')
    let decryptedData;
    if (user) {
        const bytes = CryptoJS.AES.decrypt(user, 'hola');
        decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8))
    }
    const remover = () => {
        cookies.remove('user')
        navegation('/')
    }



    return (
        <div className="flex flex-col h-screen bg-[#d9dbe0]">
            <Navbar isBordered className="bg-[#2A398C] text-white ">

                <Image src={Icon} width={50} />
                <NavbarBrand>
                    <p className="font-semibold text-sm ">COORDINACIÓN DE EXTENSIÓN PROFESIONAL</p>
                </NavbarBrand>

                <NavbarContent className="hidden sm:flex gap-5" justify="end">
                    <NavbarItem>
                        <NavLink end to="/" className={({ isActive }) => isActive ? 'text-lg font-bold ' : 'font-light'} >
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
                        <NavLink to="/login">
                            <Button>
                                Inicio session
                            </Button>

                        </NavLink>
                    </NavbarItem>
                    :
                    <NavbarItem>
                        <Dropdown>
                            <NavbarItem>
                                <DropdownTrigger>
                                    <Button
                                        className=" text-white font-semibold text-xl rounded p-2"
                                        radius="sm"
                                        variant="light"
                                    >
                                        {decryptedData}
                                    </Button>
                                </DropdownTrigger>
                            </NavbarItem>
                            <DropdownMenu>
                                <DropdownItem>
                                    <NavLink end to="/cursos" className={({ isActive }) => isActive ? 'font-bold text-sm rounded p-2' : 'font-light'} >
                                        Cursos
                                    </NavLink>
                                </DropdownItem>
                                <DropdownItem>
                                    <NavLink end to="/asistencia" className={({ isActive }) => isActive ? 'font-bold text-sm p-2' : 'font-light'} >
                                        Asistencia
                                    </NavLink>
                                </DropdownItem>
                                <DropdownItem >
                                    <NavLink end to="/" onClick={() => { remover() }} className={({ isActive }) => isActive ? 'font-bold text-sm p-2' : 'font-light'} >
                                        salir
                                    </NavLink>
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </NavbarItem>
                }

            </Navbar>
            <div className='flex flex-col h-screen p-4 overflow-hidden'>
                <div className='flex p-2 h-screen overflow-auto bg-white'>

                    {children}
                    <div className="w-[25%]">
                        <Asident />
                    </div>
                </div>
            </div>
        </div>
    )
}
