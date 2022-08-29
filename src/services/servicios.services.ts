export const mostrarServicios = async () => {
    const db = "./servicios.json";
    const peticion = await fetch(db, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    const data = await peticion.json();


    return data.servicios;
}