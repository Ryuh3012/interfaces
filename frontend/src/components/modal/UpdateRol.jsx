import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input, Select, SelectItem } from "@nextui-org/react";
import { useFormik } from "formik";
import axios from "axios";
import { useEffect } from "react";

const initialValues = { name: '', dni: "", post: '', vouchers: '', prince: "", password: "", date: "" }
const Post = ['', 'cajero', 'admin']

const UpdateModal = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const { errors, handleBlur, handleChange, handleSubmit, touched, values: { rol } } = useFormik({

        initialValues,
        onSubmit: async (value, { resetForm }) => {
            try {
                const data = await axios.post('http://localhost:3000/user', value)
            } catch (error) {
                console.log(error)
            }
            return resetForm()

        },
        // validate: values => registerValidate({ values }),

    })
    useEffect(() => {

        return async() => {
            console.log();
        };
    }, []);
    return (
        <div >

            <Button onPress={onOpen}>Editar</Button>


            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <div className="bg-[#1e3f6c]">
                            <ModalHeader className="flex justify-center font-bold text-2xl text-white">Nuevo Registro</ModalHeader>
                            <form onSubmit={handleSubmit}>
                                {(errors.name && touched.name) && (<p className="bg-red-600 pl-4 text-white rounded-[3px] py-1">{errors.name}</p>)}
                                {(errors.dni && touched.dni) && (<p className="bg-red-600 pl-4 text-white rounded-[3px] py-1">{errors.dni}</p>)}
                                {(errors.password && touched.password) && (<p className="bg-red-600 pl-4 text-white rounded-[3px] py-1">{errors.password}</p>)}

                                <ModalBody>

                                    <div className="flex w-full gap-3">
                                        <div className='flex flex-col w-full gap-2'>
                                            <Input
                                                label='Nombre'
                                                type="text"
                                                name="rol"
                                                value={rol}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                required={true}

                                                placeholder="Introduce el Nombre"
                                            />
                                        </div>


                                    </div>

                                </ModalBody>
                                <ModalFooter>
                                    <Button color="danger" variant="light" onPress={onClose}>
                                        Close
                                    </Button>
                                    <Button color="primary" type="submit" onPress={onClose}>
                                        Action
                                    </Button>
                                </ModalFooter>
                            </form>
                        </div>
                    )}
                </ModalContent>
            </Modal>
        </div>
    )
}

export default UpdateModal;
