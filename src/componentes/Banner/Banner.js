// Importa o arquivo de estilo específico para o componente Banner
import './Banner.css';

// Definição do componente funcional Banner
function Banner() {
    // Renderiza o componente, que representa um banner com uma imagem
    return (
        <header className="banner">
            {/* Imagem do banner com um caminho relativo */}
            <img src="/imagens/banner.png" alt="Banner principal"/>
        </header>
    );
}

// Exporta o componente Banner para ser utilizado em outros lugares
export default Banner;
