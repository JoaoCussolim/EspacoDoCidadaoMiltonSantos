import capaLivroImg from '../assets/capa-livro.jpg';

function SobreLivro() {
    return (
        <section id="sobre">
            <div className="container section-container">
                <div className="texto">
                    <h2>O Guia Para Entender o Mundo</h2>
                    <p>Publicado originalmente em 1987, "O Espaço do Cidadão" é uma análise profunda de como o espaço
                        geográfico define nossos direitos, deveres e a própria cidadania. Milton Santos discute
                        conceitos como as "cidadanias mutiladas" e o papel do consumo na formação da nossa identidade no
                        espaço urbano.</p>
                    <h3>Ficha Técnica</h3>
                    <ul>
                        <li><strong>Autor:</strong> Milton Santos</li>
                        <li><strong>Ano Original:</strong> 1987</li>
                        <li><strong>Temas:</strong> Cidadania, espaço, globalização, consumo, informação.</li>
                    </ul>
                </div>
                <div className="imagem">
                    <img src={capaLivroImg} alt="Capa do livro O Espaço do Cidadão" style={{ width: '60%' }} />
                </div>
            </div>
        </section>
    );
}

export default SobreLivro;