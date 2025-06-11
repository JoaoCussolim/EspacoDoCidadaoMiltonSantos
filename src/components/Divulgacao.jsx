import citacao1Img from '../assets/citacao1.jpg';
import citacao2Img from '../assets/citacao2.jpg';

function Divulgacao() {
    return (
        <section id="divulgacao">
            <div className="container">
                <h2>Fragmentos para Reflexão</h2>
                <p>Compartilhe essas ideias. Use as imagens e citações abaixo para iniciar uma conversa nas suas redes sociais.</p>
                <div className="citacoes-container">
                    <div className="citacao-card">
                        <img src={citacao1Img} alt="Citação de Milton Santos sobre cidadania" />
                        <blockquote>"O consumo é hoje o grande motor da vida social."</blockquote>
                    </div>
                    <div className="citacao-card">
                        <img src={citacao2Img} alt="Citação de Milton Santos sobre consumo" />
                        <blockquote>"O consumidor é o cidadão diminuído, incompleto."</blockquote>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Divulgacao;