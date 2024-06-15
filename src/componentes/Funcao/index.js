import Colaborador from '../Colaborador'
import './Funcao.css'

const Funcao = (props) => {
    const background = {backgroundColor: props.corSecundaria}
    const border = {borderColor: props.corPrimaria}

    return(
        props.colaboradores.length > 0 ? <section className='time' style={background}>
            <h3 style={border}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map( colaborador => <Colaborador
                key={colaborador.nome} 
                nick={colaborador.nick} 
                imagem={colaborador.imagem} 
                funcao={colaborador.funcao} 
                />)}
            </div>
        </section>
        : ''
    )
}

export default Funcao