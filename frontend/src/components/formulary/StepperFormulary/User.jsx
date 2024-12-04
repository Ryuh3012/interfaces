import { Input } from "@nextui-org/react";

import { useContext } from "react";
import { StepperContext } from "../../../contexts/StepperContext";

const User = () => {

    const { handleBlur, handleSubmit, handleChange, values: { usuario, clave, segClave } } = useContext(StepperContext)

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex justify-center items-center p-1">
                <p className="text-2xl font-serif font-semibold">Datos Del Usuario</p>
            </div>
            <div className="flex flex-col justify-center items-center py-1 gap-y-2 ms:flex-col">
                <div className='flex flex-col w-full gap-2'>
                    <Input
                        name="usuario"
                        label="Usuario"
                        value={usuario}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required={true}
                        variant="faded"
                        color="secondary"
                        placeholder="Introduce El Usuario"
                    />
                </div>
                <div className="lg:flex w-full gap-3">
                    <div className='flex flex-col w-full gap-2'>
                        <Input
                            type='password'
                            name="clave"
                            label="Contraseña"
                            value={clave}
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
                            type='password'
                            label="Confirme Su Contraseña"
                            name="segClave"
                            value={segClave}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required={true}
                            variant="faded"
                            color="secondary"
                            placeholder="Introduce Confirme Su Contraseña"
                        />
                    </div>
                </div>
            </div>
        </form>
    );
}

export default User;
