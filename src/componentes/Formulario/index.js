import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';
import Botao from '../Botao';
import { useState } from 'react';

    const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [nick, setNick] = useState('')
    const [imagem, setImagem] = useState('')
    const [funcao, setFuncao] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            nick,
            imagem,
            funcao
        })
        setNome('')
        setNick('')
        setImagem('')
        setFuncao('')
    }
    
    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados do card de jogador</h2>
                <CampoTexto 
                obrigatorio={true} 
                label="Nome" 
                placeholder="Digite seu nome verdadeiro"
                valor={nome}
                aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto 
                obrigatorio={true} 
                label="Nick" 
                placeholder="Digite seu Nick"
                valor={nick}
                aoAlterado={valor => setNick(valor)}
                />
                <CampoTexto 
                label="Imagem de Perfil" 
                placeholder="Digite o endereço da imagem"
                valor={imagem}
                aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                obrigatorio={true} 
                label="Função" 
                placeholder="Selecione sua função" 
                itens={props.funcoes}
                valor={funcao}
                aoAlterado={valor => setFuncao(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario