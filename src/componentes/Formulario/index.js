import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';

const Formulario = () => {

    const função = [
        'Awper',
        'Entry',
        'Suporte',
        'Lurker',
        'Rifler'
    ]
    
    return (
        <section className='formulario'>
            <form>
                <h2>Preencha os dados do card de jogador</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome verdadeiro" />
                <CampoTexto label="Nick" placeholder="Digite seu Nick" />
                <CampoTexto label="Imagem de Perfil" placeholder="Digite o endereço da imagem" />
                <ListaSuspensa label="Função" placeholder="Selecione sua função" itens={função} />
            </form>
        </section>
    )
}

export default Formulario