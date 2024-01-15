// Importa o arquivo de estilo específico para o componente Botao
import './Botao.css';

// Definição do componente funcional Botao
const Botao = (props) => {
    // Renderiza o botão com a classe 'botao' e exibe o conteúdo passado como children
    return (
        <button className='botao'>
            {props.children}
        </button>
    );
}

// Exporta o componente Botao para ser utilizado em outros lugares
export default Botao;
