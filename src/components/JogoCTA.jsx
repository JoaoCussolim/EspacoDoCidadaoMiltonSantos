import { Link } from 'react-router-dom';

function JogoCTA() {
    return (
        <section id="jogo-cta">
            <div className="container">
                <h2>Você é Cidadão ou Consumidor?</h2>
                <p>Participe do nosso jogo interativo e descubra como suas escolhas diárias moldam seu espaço, com base nas ideias de Milton Santos.</p>
                <Link to="/jogo" className="cta-button-grande">Começar o Jogo Agora</Link>
            </div>
        </section>
    );
}

export default JogoCTA;