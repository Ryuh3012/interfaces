import { useContext } from "react";
import { StepperContext } from "../../../contexts/StepperContext";
import { Input, Select, SelectItem } from "@nextui-org/react";

const preguntas = ['¿Cuál es el segundo nombre de tu primo mayor?', '¿En qué ciudad se conocieron tus padres?', '¿Cuál era el apellido de tu profesora de tercero de primaria?', '¿A qué universidad intentaste entrar pero finalmente no fuiste?', '¿Con quién te diste tu primer beso?']

const Segurity = () => {
    const { handleBlur, handleSubmit, handleChange, values: { preguntaUno, preguntaDos, preguntaTres, seguridadUno, seguridadDos, seguridadTres } } = useContext(StepperContext)

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex justify-center items-center">

                <p className="text-2xl font-serif font-semibold">Pregunta De Seguridad</p>
            </div>
            <div className="flex flex-col justify-center items-center py-1 gap-y-2 ms:flex-col">
                <div className="lg:flex w-full gap-3">
                    <div className='flex flex-col w-[50%]  gap-2'>

                        <Select
                            name="preguntaUno"
                            label="Primera Pregunta De seguridad"
                            value={preguntaUno}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required={true}
                            variant="faded"
                            color="secondary"

                        >
                            {preguntas.map(e => <SelectItem key={e}>{e}</SelectItem>)}
                        </Select>

                    </div>
                    <div className='flex flex-col w-full gap-2 sm:py-1'>

                        <Input
                            name="seguridadUno"
                            label="Primera Pregunta de seguridad"
                            value={seguridadUno}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required={true}
                            variant="faded"
                            color="secondary"
                            placeholder="Introduce La Primera Pregunta de seguridad"
                        />
                    </div>
                </div>
                <div className="lg:flex w-full gap-3">
                    <div className='flex flex-col w-[50%] gap-2'>

                        <Select
                            name="preguntaDos"
                            label="Segunda Pregunta De seguridad"
                            value={preguntaDos}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required={true}
                            variant="faded"
                            color="secondary"

                        >
                            {preguntas.map(e => <SelectItem key={e}>{e}</SelectItem>)}

                        </Select>

                    </div>
                    <div className='flex flex-col w-full gap-2 sm:py-1'>
                        <Input
                            type="text"
                            label="Tercera Pregunta de seguridad"
                            name="seguridadDos"
                            value={seguridadDos}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required={true}
                            variant="faded"
                            color="secondary"
                            placeholder="Introduce La tercera Pregunta De Seguridad"

                        />
                    </div>
                </div>
                <div className="lg:flex w-full gap-3">
                    <div className='flex flex-col w-[50%]  gap-2'>

                        <Select
                            name="preguntaTres"
                            label="Tercera Pregunta De seguridad"
                            value={preguntaTres}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required={true}
                            variant="faded"
                            color="secondary"
                        >
                            {preguntas.map(e => <SelectItem key={e}>{e}</SelectItem>)}

                        </Select>

                    </div>
                    <div className='flex flex-col w-full gap-2 sm:py-1'>
                        <Input
                            type="text"
                            label="Tercera Pregunta de seguridad"
                            name="seguridadTres"
                            value={seguridadTres}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required={true}
                            variant="faded"
                            color="secondary"
                            placeholder="Introduce La tercera Pregunta De Seguridad"

                        />
                    </div>
                </div>
            </div>
        </form>
    );
}

export default Segurity;
