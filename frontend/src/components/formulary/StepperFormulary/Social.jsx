import { Button, Input } from "@nextui-org/react";

import { useContext } from "react";
import { StepperContext } from "../../../contexts/StepperContext";

const Social = () => {

    const { handleBlur, handleSubmit, handleChange, values: { facebook, instagram, x, tikTok } } = useContext(StepperContext)

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex justify-center items-center p-1">
                <p className="text-2xl font-serif font-semibold">Datos De Redes Sociales</p>
            </div>
            <div className="flex flex-col justify-center items-center py-1 gap-y-2 ms:flex-col">
                <div className="lg:flex w-full gap-3">
                    <div className='flex flex-col w-full gap-2'>
                        <Input
                            name="facebook"
                            label="Facebook"
                            value={facebook}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required={true}
                            variant="faded"
                            color="secondary"
                            placeholder="Introduce El Nombre Del Facebook "
                        />
                    </div>
                    <div className='flex flex-col w-full gap-2 sm:py-1'>
                        <Input
                            name="instagram"
                            label="instagram"
                            value={instagram}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required={true}
                            variant="faded"
                            color="secondary"
                            placeholder="Introduce El Nombre Del instagram"
                        />
                    </div>
                </div>
                <div className="lg:flex w-full gap-3">
                    <div className='flex flex-col w-full gap-2'>
                        <Input
                            name="x"
                            label="x (Antiguo twitter)"
                            value={x}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required={true}
                            variant="faded"
                            color="secondary"
                            placeholder="Introduce El Nombre Del x (Antiguo twitter)"
                        />
                    </div>
                    <div className='flex flex-col w-full gap-2 sm:py-1'>
                        <Input
                            type="text"
                            label="Tiktok"
                            name="tikTok"
                            value={tikTok}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required={true}
                            variant="faded"
                            color="secondary"
                            placeholder="Introduce El Nombre Del Tiktok"
                        />
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center h-full p-4">
                <Button type="submit" className="bg-[#8C113E] text-slate-400 uppercase w-[25%] p-6 rounded-xl font-semibold cursor-pointer  hover:bg-[#6A2473] hover:text-white transition duration-2oo ease-in-out">
                    Confirmar
                </Button>
            </div>
        </form>
    );
}

export default Social;
