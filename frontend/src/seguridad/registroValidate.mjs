export const registroValidate = ({ values }) => {
    let errors = {}
    console.log(values)

    values.nombre.replace(/^[A-Za-z]+$/, '');
    values.apellido.replace(/^[A-Za-z]+$/, '');
    if (values.nombre.replace(/^[A-Za-z]+$/, '')) errors.nombre = 'No puede introducir numeros'
    if (values.nombre.length === 0) errors.nombre = 'Debes introducir Tu Nombre'
    if (values.apellido.length === 0) errors.apellido = 'Debes introducir Tu Apellido'
    if (values.apellido.replace(/^[A-Za-z]+$/, '')) errors.apellido = 'No puede introducir numeros'
    if (values.cedula.length === 0) errors.cedula = 'Debes introducir Tu Cédula'
    if (values.cedula.toString().length < 8) errors.cedula = 'No puede pasarse de los 8 digitos'
    if (values.fecha.length === 0) errors.fecha = 'Debes introducir Tu Fecha de Nacimiento'
    if (values.fecha >= '2005-12-31') errors.fecha = 'No Cumple Con La Edad Requeridad'
    if (values.fecha < '1954-12-31') errors.fecha = 'No Cumple Con La Edad Requeridad'
    if (values.email.length === 0) errors.email = 'Debes introducir Tu Correo'
    if (values.nombre.length === 0) errors.usuario = 'Debes introducir Tu Usuario'
    if (values.usuario) errors.usuario = 'Debes introducir Tu Usuario'
    if (values.clave.length === 0) errors.clave = 'Debes introducir Tu Contraseña'
    if (values.clave.segClave === 0) errors.segClave = 'Debes introducir Tu Contraseña'
    if (values.segClave !== values.clave) errors.segClave = 'Debes Ser Igual A La Contraseña'
    if (values.seguridadUno.length === 0 || values.seguridadDos.length === 0 || values.seguridadTres.length === 0) errors.seguridadUno = 'Debes introducir Una Respuesta '
    if (values.preguntaUno.length === 0 || values.preguntaDos.length === 0 || values.preguntaTres.length === 0) errors.preguntaUno = 'Debes introducir Una Pregunta De Seguridad '

    console.log(errors)
    return errors
}