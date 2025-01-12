export const date = ({ fecha }) => {

    const fechaActual = new Date()
    const yearActual = parseInt(fechaActual.getFullYear())
    const messActual = parseInt(fechaActual.getMonth() + 1)
    const diaActual = parseInt(fechaActual.getDate())

    const yearNacimiento = parseInt(String(fecha).substring(0, 4))
    const mesNacimiento = parseInt(String(fecha).substring(5, 7))
    const diaNacimiento = parseInt(String(fecha).substring(8, 10))

    let edad = yearActual - yearNacimiento
    if (mesNacimiento > messActual || (mesNacimiento === messActual && diaNacimiento > diaActual)) {
        edad--
    }
    return edad

}