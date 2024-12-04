
import { useContext, useState, useEffect } from "react";
import { StepperContext } from "../../../contexts/StepperContext";
import { Input, Select, SelectItem } from "@nextui-org/react";
import axios from "axios";



const nacionali = ['', 'V', 'E']

const Peoples = () => {

    const { handleBlur, handleSubmit, handleChange, values: { cedula, nombre, apellido, email, nacionalidad, fecha, pais } } = useContext(StepperContext)
    const [paises, setPaises] = useState([]);
    useEffect(() => {
        return async () => {
            const { data: { messager } } = await axios.get('http://localhost:3000/paises')
            setPaises(...paises, messager)
        };
    }, []);
    return (
        <form onSubmit={handleSubmit}>
            <div className="flex justify-center items-center">

                <p className="text-2xl fon">Datos Personales</p>
            </div>
            <div className="flex flex-col justify-center items-center py-1 gap-y-2 ms:flex-col">

                <div className="lg:flex w-full gap-3">
                    <div className='flex flex-col w-full gap-2'>
                        <Input
                            name="nombre"
                            label="Nombre"
                            value={nombre}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required={true}
                            variant="faded"
                            color="secondary"
                            placeholder="Introduce El Nombre"
                        />
                    </div>
                    <div className='flex flex-col w-full gap-2 sm:py-1'>
                        <Input
                            type="text"
                            label="Apellido"
                            name="apellido"
                            value={apellido}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required={true}
                            variant="faded"
                            color="secondary"
                            placeholder="Introduce El Apellido"
                        />
                    </div>
                </div>
                <div className="flex w-full gap-3">
                    <div className="lg:flex w-[20%] gap-3">
                        <Select
                            name="nacionalidad"
                            label='C.I'
                            value={nacionalidad}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required={true}
                            variant="faded"
                            color="secondary"
                        >
                            {nacionali.map(e => <SelectItem key={e}>{e}</SelectItem>)}
                        </Select>
                    </div>
                    <div className="flex flex-col lg:w-full sm:w-full">
                        <Input
                            type="number"
                            name="cedula"
                            label="Cedula"
                            value={cedula}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required={true}
                            variant="faded"
                            color="secondary"
                            placeholder="Introduce La Cedula"
                        />
                    </div>

                </div>
                <div className="lg:flex w-full gap-3">

                    <div className='flex flex-col w-full gap-2 sm:py-1'>
                        <Input
                            type="date"
                            label="Fecha De Nacimiento"
                            name="fecha"
                            value={fecha}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required={true}
                            variant="faded"
                            color="secondary"
                            placeholder="Introduce El Apellido"
                        />

                    </div>
                    <div className='flex flex-col w-full gap-2 sm:py-1'>
                        <Input
                            type="text"
                            label="Correo"
                            name="email"
                            value={email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required={true}
                            variant="faded"
                            color="secondary"
                            placeholder="Introduce El Correo"
                        />
                    </div>

                </div>

                {nacionalidad == 'E' ?

                    <div className='flex flex-col w-full lg:gap-2 '>
                        <Select
                            name="pais"
                            label='Pais de Origen'
                            value={pais}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required={true}
                            variant="faded"
                            color="secondary"
                            placeholder="Nacionalidad"
                        >
                            {paises.map(({ idpais, pais }) => <SelectItem key={idpais}>{pais}</SelectItem>)}

                        </Select>
                    </div>
                    :
                    null
                }

            </div>
        </form>

    );
}

export default Peoples;
