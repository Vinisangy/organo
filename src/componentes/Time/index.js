// Importa o componente Colaborador para ser usado dentro do componente Time
import Colaborador from '../Colaborador';

// Importa o arquivo de estilo específico para o componente Time
import './Time.css';

// Definição do componente funcional Time
const Time = (props) => {
    // Define um objeto de estilo para a cor secundária do time
    const css = { backgroundColor: props.corSecundaria };

    // Renderiza o componente somente se houver colaboradores no time
    return (
        (props.colaboradores.length > 0) ? 
            <section className='time' style={css}>
                {/* Título do time com a cor primária como borda */}
                <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
                
                {/* Contêiner para os colaboradores do time */}
                <div className='colaboradores'>
                    {/* Mapeia e renderiza cada colaborador usando o componente Colaborador */}
                    {props.colaboradores.map(colaborador => 
                        <Colaborador 
                            corDeFundo={props.corPrimaria} 
                            key={colaborador.nome} 
                            nome={colaborador.nome} 
                            cargo={colaborador.cargo} 
                            imagem={colaborador.imagem}
                        />
                    )}
                </div>
            </section> 
        : '' // Retorna uma string vazia se não houver colaboradores no time
    );
}

// Exporta o componente Time para ser utilizado em outros lugares
export default Time;
