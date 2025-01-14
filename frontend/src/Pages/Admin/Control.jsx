import { useContext, useEffect, useMemo, useState } from 'react';

import { SocketContext } from '../../SocketProvider';
import { getKeyValue, Pagination, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/react';
import { LayoutAdmin } from './Nav';
import axios from 'axios';
import UpdateModal from '../../components/modal/UpdateRol';


const columns = [
    {
        key: "usuario",
        label: "Usuarios",
    },
    {
        key: "rol",
        label: "Roles",
    },
    {
        key: "edit",
        label: "Cambiar Roles",
    },

];
const Control = () => {


    const [cursos, setCursos] = useState([])
    const [page, setPage] = useState(1);
    const rowsPerPage = 4;

    useEffect(() => {

        return async () => {
            const { data: { user } } = await axios.get('http://localhost:3000/api/auth/perfil')
            console.log(user);
            setCursos(user)
        };
    }, []);

    const pages = Math.ceil(cursos.length / rowsPerPage);

    const items = useMemo(() => {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;

        return cursos.slice(start, end);
    }, [page, cursos]);

    return (
        <LayoutAdmin>
            <div className="p-10 flex flex-col gap-6 w-full h-full ">
                <div className="bg-white rounded-[5px] shadow-md p-5 w-full border-[1px] border-[#C4CEDC]">
                    <h1 className='text-[30px] font-semibold mb-5'>Gestion de Facilitadores</h1>
                    <Table
                        shadow="none"
                        aria-label="Example table with client side pagination"
                        bottomContent={
                            pages > 0 ? (
                                <div className="flex w-full justify-center">
                                    <Pagination
                                        isCompact
                                        showControls
                                        showShadow
                                        color="secondary"
                                        page={page}
                                        total={pages}
                                        onChange={(page) => setPage(page)}
                                    />
                                </div>
                            ) : null
                        }
                        classNames={{
                            wrapper: "min-h-[222px]",
                        }}
                    >
                        <TableHeader columns={columns}>
                            {(column) => <TableColumn className="text-left bg-[#1F2559] text-white px-3" key={column.key}>{column.label}</TableColumn>}
                        </TableHeader>
                        <TableBody items={items}>
                            {(item) => (
                                <TableRow key={item}>

                                    {(columnKey) => {
                                        if (columnKey === 'edit') return <TableCell><UpdateModal /></TableCell>
                                        return <TableCell>{getKeyValue(item, columnKey)}</TableCell>
                                    }
                                    }
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>

                </div>
            </div>
        </LayoutAdmin>
    );
}

export default Control;
