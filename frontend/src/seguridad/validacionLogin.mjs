export const loginValidate = ( { values } ) => {
    let errors = {}
    if (values.usuario.length === 0) errors.usuario = 'Debes Introducir Tu Usuario'
    if (values.clave.length === 0) errors.clave = 'Debes introducir la Contraseña'
    
    console.log(errors)
    return errors

}