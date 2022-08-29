
import { useActionForm } from "../../../../hooks/useActionForm";

const Form = () => {

    const { data, handleAdd, handleChange } = useActionForm();

    return (
        <form action="" onSubmit={handleAdd} className='form'>
            <div className="campo">
                <label htmlFor="">Nombre</label>
                <input required type="text" onChange={handleChange} placeholder='Tu nombre' value={data.nombre} name="nombre" id='nombre' />
            </div>
            <div className="campo">
                <label htmlFor="">Fecha</label>
                <input required type="date" onChange={handleChange} value={data.fecha} name="fecha" id='fecha' />

            </div>
            <div className="campo">
                <label htmlFor="">Hora</label>
                <input required type="time" onChange={handleChange} value={data.hora} name="hora" id='hora' min="08:00:00" max="20:00:00" />
            </div>
            {/* <button type="submit" className="btn" onClick={(e) => { handleAdd(e) }}>Agregar Datos</button> */}
            <button type="submit" className="btn">Agregar Datos</button>
        </form>
    )
}

export default Form