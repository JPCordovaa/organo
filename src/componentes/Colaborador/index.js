import './Colaborador.css'

const Colaborador = (props) => {
    return(
        <div className='colaborador'>
            <div className='cabecalho'>
                <img src={props.imagem} alt={props.nick}/>
            </div>
            <div className='rodape'>
                <h4>{props.nick}</h4>
                <h5>{props.funcao}</h5>
            </div>
        </div>
    )
}
export default Colaborador