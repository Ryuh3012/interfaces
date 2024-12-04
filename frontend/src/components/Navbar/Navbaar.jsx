import { Avatar, Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Image, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react"
import { NavLink } from "react-router-dom"
import Icon from "../../assets/icon2.png"

export const LayoutDashboard = ({ children }) => {
    return (
        <div className="bg-[#d9dbe0] ">
            <Navbar isBordered
                className="bg-[#2A398C] text-white "
            >
                <Image src={Icon} width={70} />
                <NavbarBrand>
                    <p className="font-semibold ">COORDINACIÓN DE EXTENSIÓN PROFESIONAL</p>
                </NavbarBrand>

                <NavbarContent className="hidden sm:flex gap-5" justify="end">
                    <NavbarItem>
                        <NavLink end to="/home" className={({ isActive }) => isActive ? 'bg-[#F29441] rounded p-2' : 'font-light hover:rounded p-2'} >
                            Inicio
                        </NavLink>
                    </NavbarItem>
                    <Dropdown>
                        <NavbarItem>
                            <DropdownTrigger>
                                <Button
                                    className=" text-white font-light rounded p-2"
                                    radius="sm"
                                    variant="light"
                                >
                                    Features
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
                            <DropdownItem>
                                <NavLink end to="/facilitador" className={({ isActive }) => isActive ? 'font-bold text-sm p-2' : 'font-light'} >
                                    Facilitadores
                                </NavLink>
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <NavbarItem>
                        <NavLink end to="/home" className={({ isActive }) => isActive ? 'bg-[#F29441] rounded p-2' : 'font-light hover:rounded p-2'} >
                            Inicio
                        </NavLink>
                    </NavbarItem>
                </NavbarContent>

                <NavbarContent as="div" justify="end">
                    <Dropdown placement="bottom-end">
                        <DropdownTrigger>
                            <Avatar
                                isBordered
                                as="button"
                                className="transition-transform"
                                color="secondary"
                                name="Jason Hughes"
                                size="sm"
                                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                            />
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Profile Actions" variant="flat">
                            <DropdownItem key="configurations">Configurations</DropdownItem>
                            <DropdownItem key="logout" color="danger">
                                Log Out
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </NavbarContent>
            </Navbar>
        </div>
    )
}
