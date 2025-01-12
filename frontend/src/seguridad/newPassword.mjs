export const newPassword = ({ values }) => {
    let errors = {}

    if (values.newClave.length === 0) errors.newClave = 'Debe Introducir Tu Nueva Contraseña'
    if (values.repitClave.length === 0) errors.repitClave = 'Debe Repetir Tu Nueva Contraseña'
    if (values.repitClave !== values.newClave) errors.repitClave = 'Debe Ser igual A La Nueva contraseña'


    console.log(errors)
    return errors

}