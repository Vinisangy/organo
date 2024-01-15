// Importa o arquivo de estilo específico para o componente CampoTexto
import './CampoTexto.css';

// Definição do componente funcional CampoTexto
const CampoTexto = (props) => {
    // Modifica o placeholder adicionando "..." no final
    const placeholderModificada = `${props.placeholder}...`;

    // Função chamada ao digitar no campo de texto
    const aoDigitado = (evento) => {
        // Chama a função fornecida via props para informar sobre alterações no valor do campo
        props.aoAlterado(evento.target.value);
    }

    // Renderiza a estrutura do componente
    return (
        <div className="campo-texto">
            {/* Rótulo do campo de texto */}
            <label>
                {props.label}
            </label>
            
            {/* Campo de entrada de texto */}
            <input 
                value={props.valor} 
                onChange={aoDigitado} 
                required={props.obrigatorio} 
                placeholder={placeholderModificada}
            />
        </div>
    );
}

// Exporta o componente CampoTexto para ser utilizado em outros lugares
export default CampoTexto;
