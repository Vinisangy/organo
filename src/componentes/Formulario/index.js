// Importa o hook useState do React para gerenciar o estado do componente funcional
import { useState } from "react";

// Importa os componentes necessários
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import './Formulario.css'; // Importa o arquivo de estilo específico para o componente Formulario

// Definição do componente funcional Formulario
const Formulario = (props) => {
    // Estados locais para armazenar os dados do formulário
    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');

    // Função chamada ao salvar o formulário
    const aoSalvar = (evento) => {
        evento.preventDefault();
        // Chama a função fornecida via props para informar que um novo colaborador foi cadastrado
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        });
        // Limpa os estados após salvar
        setNome('');
        setCargo('');
        setImagem('');
        setTime('');
    }

    // Renderiza a estrutura do componente
    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                {/* Título do formulário */}
                <h2>Preencha os dados para criar o card do colaborador</h2>
                
                {/* Componente CampoTexto para o nome do colaborador */}
                <CampoTexto 
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome" 
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                
                {/* Componente CampoTexto para o cargo do colaborador */}
                <CampoTexto
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite seu cargo" 
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                
                {/* Componente CampoTexto para o endereço da imagem do colaborador */}
                <CampoTexto
                    label="Imagem"
                    placeholder="Digite o endereço da imagem" 
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                
                {/* Componente ListaSuspensa para selecionar o time do colaborador */}
                <ListaSuspensa
                    obrigatorio={true}
                    label="Time" 
                    itens={props.times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                
                {/* Componente Botao para submeter o formulário */}
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    );
}

// Exporta o componente Formulario para ser utilizado em outros lugares
export default Formulario;
