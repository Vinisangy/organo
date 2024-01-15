// Importa o arquivo de estilo específico para o componente ListaSuspensa
import './ListaSuspensa.css';

// Definição do componente funcional ListaSuspensa
const ListaSuspensa = (props) => {
    // Renderiza a estrutura do componente
    return (
        <div className='lista-suspensa'>
            {/* Rótulo da lista suspensa */}
            <label>{props.label}</label>
            
            {/* Lista suspensa (select) com manipulador de evento para alterações */}
            <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.required} value={props.valor}>
                {/* Opção vazia inicial para permitir a escolha nula */}
                <option value=""></option>
                
                {/* Mapeia e renderiza cada item na lista suspensa */}
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    );
}

// Exporta o componente ListaSuspensa para ser utilizado em outros lugares
export default ListaSuspensa;
