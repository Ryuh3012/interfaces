import { useEffect, useState } from 'react';
import { LayoutDashboard } from '../components/Navbar/Navbaar';
import axios from 'axios';
import Cookies from 'universal-cookie';
import CryptoJS from "crypto-js";


const Index = () => {
    const [persona, setPersona] = useState([]);
    const [red, setRed] = useState([]);

    useEffect(() => {
        const cookis = new Cookies()
        const user = cookis.get('user')
        const bytes = CryptoJS.AES.decrypt(user, 'hola');
        const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8))
        return async () => {
            const { data } = await axios.get(`http://localhost:3000/api/${decryptedData}`)

            setPersona([...persona, data.persona])
            setRed([...red, data.redes])
        }
    }, []);
    console.log(red);
    return (
        <LayoutDashboard>

            <section className='p-10 flex flex-col gap-6'>
                <div className='flex justify-between gap-10'>
                    <div className="bg-white rounded-[5px] p-5 shadow-md w-full border-[1px] border-[#C4CEDC]">

                        <p className='text-black font-bold text-xl'> Redes Sociales </p>

                        {

                            red.map(e => e.map(({ redsocial, usuario }) => (<p className='text-black' key={redsocial}>{usuario}</p>)))
                        }





                    </div>
                </div>

            </section>

        </LayoutDashboard>
    );
}

export default Index;
