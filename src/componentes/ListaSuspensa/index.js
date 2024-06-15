import './ListaSuspensa.css'

const ListaSuspensa = (props) => {

    const aoDigitar = (evento) =>{
        props.aoAlterado(evento.target.value)
    }

    return(
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select required={props.obrigatorio} value={props.valor} onChange={aoDigitar}>
                {props.itens.map(item => <option key={item} placeholder={props.placeholder}>{item}</option>)}
            </select>
        </div>
    )
    
}

export default ListaSuspensa;