import React from 'react'
import Form from './Form/Form'

const InfoCliente = () => {
    return (
        <div id='2' className='info-cliente pagina'>
            <h2>Tus Datos</h2>
            <h3>Completa tus datos y fecha de cita</h3>
            <Form />
        </div>
    )
}

export default React.memo(InfoCliente)