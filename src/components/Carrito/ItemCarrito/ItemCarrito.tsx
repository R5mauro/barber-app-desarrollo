
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteResumen } from '../../../redux/states/resumen.state'
import { Resumen } from '../../../types/typeApp'
import { notificacion } from '../../../utilities/notificacion.utility'
import ServicioItemCarrito from './ServicioItemCarrito/ServicioItemCarrito'

interface Props {
    item: Resumen
}

const ItemCarrito = ({ item }: Props) => {
    const dispatch = useDispatch();
    let totalCarrito: number = 0;
    return (
        <div className='item-carrito'>
            <div className="header-item-carrito">
                <h3>{item.cliente.nombre}</h3>
                <button className='btn' onClick={() => {
                    dispatch(deleteResumen(item));
                    notificacion("Resumen eliminado correctamente", "success")
                }}>X</button>
            </div>
            <div className="date-item-carrito">
                <p> - {item.cliente.fecha}</p>
                <p> - {item.cliente.hora}</p>
            </div>
            <div className="servicios-item-carrito">
                <h4>Servicios</h4>
                {item.serviciosSeleccionados.map(servicio => {
                    return (<ServicioItemCarrito key={servicio.id} servicio={servicio} />)
                })}
                <div className="total-servicios-carrito">
                    <p className='bold'>Total:
                        {item.serviciosSeleccionados.map(servicio => {
                            totalCarrito += servicio.precio
                            return true;
                        })}<span className='color-blue'>{` $${totalCarrito}`}</span></p>
                </div>
            </div>
        </div>
    )
}

export default ItemCarrito