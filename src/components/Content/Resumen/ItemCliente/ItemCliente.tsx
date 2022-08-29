
const ItemCliente = ({ cliente }: any) => {


    return (
        <div>
            <h3>Datos de la cita</h3>
            <div className="row">
                <p className="color-blue">Nombre:</p>
                <p>{cliente.nombre}</p>

            </div>
            <div className="row">
                <p className="color-blue">Fecha:</p>
                <p>{cliente.fecha}</p>

            </div>
            <div className="row">
                <p className="color-blue">Hora:</p>
                <p>{cliente.hora}</p>

            </div>
        </div>
    )
}

export default ItemCliente