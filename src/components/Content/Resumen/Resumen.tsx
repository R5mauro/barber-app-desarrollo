import { memo, useContext } from 'react'
import { useDispatch } from 'react-redux';
import { ClienteContext } from '../../../context/ClienteContext';
import { ServicesContext } from '../../../context/ServicesContext'
import { useActionRedux } from '../../../hooks/useActionRedux';
import { addResumen } from '../../../redux/states/resumen.state';
import { notificacion } from '../../../utilities/notificacion.utility';
import ItemCliente from './ItemCliente/ItemCliente';
import ItemResumen from './ItemResumen/ItemResumen';

const Resumen = memo(() => {
    const { servicios } = useContext(ServicesContext);
    const { cliente } = useContext(ClienteContext)
    const dispatch = useDispatch()
    useActionRedux();




    let resultado: number = 0;
    return (
        <div id='3' className='resumen pagina'>
            {Object.entries(cliente).length === 0
                ? <p>Complete sus datos</p>
                : <ItemCliente cliente={cliente} />
            }
            {servicios.length === 0
                ? <p>Aún no ha seleccionado servicio</p>
                : <div>
                    <h3>Sus Servicios</h3>
                    {servicios.map((servicio) => {
                        return (<ItemResumen key={servicio.id} servicio={servicio} />)
                    })}
                </div>}
            {(Object.entries(cliente).length !== 0 && servicios.length !== 0)
                &&
                <div className='total'>
                    <p>Total: {
                        servicios.map((servicio: any) => {
                            resultado = resultado + servicio.precio;
                            return true;
                        })
                    }<span className='color-blue'>{`$${resultado}`}</span></p>
                    <button className='btn' onClick={
                        () => {
                            dispatch(addResumen(
                                { serviciosSeleccionados: servicios, cliente }
                            ))
                            notificacion("Resumen guardado correctamente", "success")
                        }}>Finalizar y Guardar</button>
                </div>
            }
        </div>
    )
});

export default Resumen;