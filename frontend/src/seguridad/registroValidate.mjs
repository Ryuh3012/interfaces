export const registroValidate = ( { values } ) => {
    let errors = {}
    console.log(values)
    if (values.nombre.length === 0) errors.nombre = 'Debes introducir Tu Nombre'
    if (values.apellido.length === 0) errors.apellido = 'Debes introducir Tu Apellido'
    if (values.cedula.length === 0) errors.cedula = 'Debes introducir Tu Cédula'
    if (values.fecha.length === 0) errors.fecha = 'Debes introducir Tu Fecha de Nacimiento'
    if (values.email.length === 0) errors.email = 'Debes introducir Tu Correo'
    
    console.log(errors)
    return errors
}