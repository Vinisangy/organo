// Importa o arquivo de estilo específico para o componente Colaborador
import './Colaborador.css';

// Definição do componente funcional Colaborador
const Colaborador = ({ nome, imagem, cargo, corDeFundo }) => {
    // Renderiza a estrutura do componente
    return (
        <div className='colaborador'>
            {/* Cabeçalho do colaborador com fundo colorido */}
            <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
                {/* Imagem do colaborador */}
                <img src={imagem} alt={nome} />
            </div>
            
            {/* Rodapé do colaborador com informações de nome e cargo */}
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    );
}

// Exporta o componente Colaborador para ser utilizado em outros lugares
export default Colaborador;
