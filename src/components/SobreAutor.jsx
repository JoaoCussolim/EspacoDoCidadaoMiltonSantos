import fotoMiltonSantosImg from '../assets/foto-milton-santos.jpg';

function SobreAutor() {
    return (
        <section id="autor">
            <div className="container section-container reverse">
                <div className="texto">
                    <h2>A Voz Crítica da Geografia</h2>
                    <p>Milton Santos (1926-2001) foi um dos mais importantes intelectuais brasileiros. Geógrafo e
                        pensador, dedicou sua vida a analisar as dinâmicas do espaço e as desigualdades sociais.
                        Vencedor do Prêmio Vautrin Lud, considerado o "Nobel da Geografia", sua obra é fundamental para
                        entender o Brasil e o mundo sob a ótica de uma globalização mais humana.</p>
                </div>
                <div className="imagem">
                    <img src={fotoMiltonSantosImg} alt="Foto do geógrafo Milton Santos" />
                </div>
            </div>
        </section>
    );
}

export default SobreAutor;