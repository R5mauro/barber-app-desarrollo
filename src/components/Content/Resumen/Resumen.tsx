import { memo, useContext } from 'react'
import { Link } from 'react-router-dom';
import { ClienteContext } from '../../../context/ClienteContext';
import { ServicesContext } from '../../../context/ServicesContext'
import ItemCliente from './ItemCliente/ItemCliente';
import ItemResumen from './ItemResumen/ItemResumen';

const Resumen = memo(() => {
    const { servicios } = useContext(ServicesContext);
    const { cliente } = useContext(ClienteContext)
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
                    {/* <Link to="/ticket" className='btn'>Generar Ticket</Link> */}
                </div>
            }
        </div>
    )
});

export default Resumen;