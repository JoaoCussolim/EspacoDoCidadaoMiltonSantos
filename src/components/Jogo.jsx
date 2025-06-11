import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './jogo.css'; 

const perguntas = [
    {
        pergunta: "Como você decide se locomover para o trabalho hoje?",
        opcoes: [
            { texto: "Usar o transporte público. É mais demorado e lotado.", custo: -5, tipo: 'cidadao', feedback: "O transporte coletivo define o ritmo da cidade para a maioria, mas a qualidade do serviço define a qualidade da cidadania." },
            { texto: "Chamar um carro por aplicativo. É mais rápido e confortável.", custo: -25, tipo: 'consumidor', feedback: "A tecnologia oferece soluções individuais que fragmentam a experiência coletiva do espaço." },
            { texto: "Ir com seu próprio carro. É a opção mais cômoda.", custo: -40, tipo: 'consumidor', feedback: "O automóvel particular cria uma 'bolha' que nos isola da realidade urbana vivida pela maioria." }
        ]
    },
    {
        pergunta: "Onde você fará as compras da semana?",
        opcoes: [
            { texto: "Na grande rede de supermercados. É mais barato e prático.", custo: -300, tipo: 'consumidor', feedback: "As grandes corporações redesenham o território, padronizando o consumo e enfraquecendo as economias locais." },
            { texto: "Na feira orgânica do bairro. É mais caro, mas apoia produtores locais.", custo: -450, tipo: 'cidadao', feedback: "Apoiar o comércio local é um ato de resistência que fortalece os laços e a identidade do 'lugar'." },
            { texto: "Pedir por um aplicativo de entrega rápida. É o mais cômodo.", custo: -350, tipo: 'consumidor', feedback: "A velocidade e a conveniência da nova economia informacional redefinem nossa relação com o tempo e o espaço." }
        ]
    },
    {
        pergunta: "Seu bairro está 'valorizando' e o aluguel subiu muito. O que você faz?",
        opcoes: [
            { texto: "Procurar um lugar mais barato para morar, mais longe de tudo.", custo: -500, tipo: 'consumidor', feedback: "A gentrificação expulsa os moradores originais, tratando a moradia como mercadoria e não como direito." },
            { texto: "Organizar-se com os vizinhos para lutar contra o aumento abusivo.", custo: -20, tipo: 'cidadao', feedback: "A resistência coletiva no espaço vivido é a mais pura expressão da cidadania contra a especulação imobiliária." },
            { texto: "Aceitar o aumento e cortar outros gastos para permanecer na 'área boa'.", custo: -250, tipo: 'consumidor', feedback: "Ao aceitar a lógica do mercado, o indivíduo se torna consumidor do espaço, precificando sua própria permanência." }
        ]
    },
    {
        pergunta: "Você precisa de um atendimento de saúde não emergencial. Qual sua escolha?",
        opcoes: [
            { texto: "Enfrentar a fila e a burocracia do posto de saúde público (SUS).", custo: 0, tipo: 'cidadao', feedback: "O sistema público de saúde é um direito e um espaço de cidadania. Usá-lo e lutar por sua melhoria é um dever cívico." },
            { texto: "Pagar por uma consulta particular para resolver o problema rapidamente.", custo: -250, tipo: 'consumidor', feedback: "A saúde, quando tratada como serviço, cria uma 'geografia da saúde' que aprofunda as desigualdades sociais." },
            { texto: "Pesquisar os sintomas na internet e se automedicar.", custo: -50, tipo: 'consumidor', feedback: "A busca por soluções individuais e imediatas, mediada pela técnica, é um sintoma de uma cidadania fragilizada." }
        ]
    },
    {
        pergunta: "Uma notícia polêmica sobre sua cidade surge. Como você reage?",
        opcoes: [
            { texto: "Confio no que meu feed de notícias e grupos de WhatsApp me mostram.", custo: 0, tipo: 'consumidor', feedback: "Os algoritmos criam bolhas informacionais que nos entregam uma visão parcial do território, reforçando preconceitos." },
            { texto: "Busco ativamente por fontes diversas, incluindo mídia independente e local.", custo: 0, tipo: 'cidadao', feedback: "O cidadão busca a 'totalidade', a visão completa do fato, para compreender a complexidade do seu espaço." },
            { texto: "Vou até o local (se seguro) para conversar e observar a situação por mim mesmo.", custo: -10, tipo: 'cidadao', feedback: "A experiência direta do espaço é insubstituível. O verdadeiro conhecimento do território vem dos pés e dos olhos." }
        ]
    },
    {
        pergunta: "Onde seu filho (hipotético) irá estudar?",
        opcoes: [
            { texto: "Na escola pública do bairro, acreditando na educação como um bem coletivo.", custo: 0, tipo: 'cidadao', feedback: "A escola pública é um dos principais espaços onde a cidadania pode ser construída e a diversidade, vivenciada." },
            { texto: "Numa escola particular, fazendo um grande esforço financeiro para isso.", custo: -800, tipo: 'consumidor', feedback: "A educação privada cria 'circuitos espaciais de exclusão', perpetuando a desigualdade entre as gerações." },
            { texto: "Numa rede de ensino com método 'inovador' focado em resultados globais.", custo: -1200, tipo: 'consumidor', feedback: "A globalização também padroniza a educação, muitas vezes ignorando as particularidades e necessidades locais." }
        ]
    },
    {
        pergunta: "Um projeto de um grande condomínio de luxo ameaça a última área verde do bairro. O que você faz?",
        opcoes: [
            { texto: "Participa do protesto online e assina a petição.", custo: 0, tipo: 'cidadao', feedback: "A cidadania digital amplia o alcance, mas a ação no espaço físico ainda é fundamental para a transformação." },
            { texto: "Ignora. A cidade precisa 'progredir' e isso não me afeta diretamente.", custo: 0, tipo: 'consumidor', feedback: "A indiferença ao espaço público é um sintoma da 'cidadania mutilada', focada apenas no privado." },
            { texto: "Doa dinheiro para a associação de moradores que luta contra o projeto.", custo: -100, tipo: 'cidadao', feedback: "O uso de recursos financeiros para apoiar causas coletivas é uma forma potente de exercer a cidadania no sistema atual." }
        ]
    },
    {
        pergunta: "Como você vai aproveitar seu lazer no feriado?",
        opcoes: [
            { texto: "Viajar para um resort 'all-inclusive'.", custo: -2500, tipo: 'consumidor', feedback: "Os 'não-lugares' de lazer, como resorts, oferecem uma experiência global padronizada, desconectada da cultura local." },
            { texto: "Ir a um festival de cultura popular gratuito na praça central.", custo: -30, tipo: 'cidadao', feedback: "O espaço público, quando ocupado pela cultura, torna-se o palco principal da vida cívica e da identidade coletiva." },
            { texto: "Fazer um curso online sobre um novo hobby.", custo: -200, tipo: 'consumidor', feedback: "A busca por autoaperfeiçoamento no espaço digital é uma faceta do individualismo contemporâneo." }
        ]
    }
];


function Jogo() {
    const [etapa, setEtapa] = useState('selecao'); 
    const [perfilInicial, setPerfilInicial] = useState('');
    const [dinheiro, setDinheiro] = useState(0);
    const [pontosCidadao, setPontosCidadao] = useState(0);
    const [pontosConsumidor, setPontosConsumidor] = useState(0);
    const [perguntaAtualIndex, setPerguntaAtualIndex] = useState(0);
    const [feedback, setFeedback] = useState('');


    const handleSelecionarClasse = (perfil, dinheiroInicial) => {
        setPerfilInicial(perfil);
        setDinheiro(dinheiroInicial);
        setPerguntaAtualIndex(0);
        setPontosCidadao(0);
        setPontosConsumidor(0);
        setEtapa('jogo');
    };

    const handleSelecionarOpcao = (opcao) => {
        setDinheiro(dinheiroAtual => dinheiroAtual + opcao.custo);
        if (opcao.tipo === 'cidadao') {
            setPontosCidadao(p => p + 1);
        } else {
            setPontosConsumidor(p => p + 1);
        }
        setFeedback(opcao.feedback);
        setEtapa('feedback');
    };

    const handleProximaPergunta = () => {
        const proximoIndex = perguntaAtualIndex + 1;
        if (proximoIndex < perguntas.length) {
            setPerguntaAtualIndex(proximoIndex);
            setEtapa('jogo');
        } else {
            setEtapa('final');
        }
    };

    const handleReiniciar = () => {
        setEtapa('selecao');
    };


    return (
        <div className="jogo-page-wrapper">
            <div className="jogo-container">
                {etapa === 'selecao' && (
                    <div id="tela-inicial">
                        <h2>Ponto de Partida</h2>
                        <p>A geografia pessoal de cada um define suas possibilidades. Segundo Milton Santos, o espaço não é o mesmo para todos. Escolha seu ponto de partida para começar.</p>
                        <div id="classes-container">
                            <button className="classe-btn" onClick={() => handleSelecionarClasse('trabalhador', 1800)}>
                                <h3>Morador da Periferia</h3>
                                <p>Você começa com um salário mais baixo, mora longe do centro e depende de transporte público. Cada centavo conta.</p>
                            </button>
                            <button className="classe-btn" onClick={() => handleSelecionarClasse('media', 5500)}>
                                <h3>Morador de Bairro Planejado</h3>
                                <p>Você tem uma renda confortável, carro próprio e acesso a mais serviços. Suas escolhas são mais flexíveis.</p>
                            </button>
                            <button className="classe-btn" onClick={() => handleSelecionarClasse('alta', 15000)}>
                                <h3>Morador do Centro Expandido</h3>
                                <p>Sua renda é alta e o tempo é seu maior ativo. O custo das coisas raramente é um problema para você.</p>
                            </button>
                        </div>
                    </div>
                )}

                {etapa === 'jogo' && (
                    <div id="tela-jogo">
                        <div className="placar">
                            <div id="placar-dinheiro">DINHEIRO: R$ {dinheiro.toFixed(2)}</div>
                            <div id="placar-cidadao">CIDADÃO: {pontosCidadao}</div>
                            <div id="placar-consumidor">CONSUMIDOR: {pontosConsumidor}</div>
                        </div>
                        <div id="quiz-container">
                            <h2 id="pergunta-texto">{perguntas[perguntaAtualIndex].pergunta}</h2>
                            <div id="opcoes-container">
                                {perguntas[perguntaAtualIndex].opcoes.map((opcao, index) => (
                                    <button
                                        key={index}
                                        className="opcao-btn"
                                        onClick={() => handleSelecionarOpcao(opcao)}
                                        disabled={dinheiro < Math.abs(opcao.custo)}
                                        title={dinheiro < Math.abs(opcao.custo) ? "Você não tem dinheiro suficiente para esta opção." : ""}
                                    >
                                        {opcao.texto} <br />
                                        <span className="custo">(Custo: R$ {Math.abs(opcao.custo)},00)</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {etapa === 'feedback' && (
                    <div id="tela-feedback">
                        <h3>A Voz de Milton Santos:</h3>
                        <p id="feedback-texto">"{feedback}"</p>
                        <button id="proxima-pergunta-btn" onClick={handleProximaPergunta}>Continuar</button>
                    </div>
                )}

                {etapa === 'final' && (
                    <ResultadoFinal pontosCidadao={pontosCidadao} pontosConsumidor={pontosConsumidor} perfilInicial={perfilInicial} onReiniciar={handleReiniciar} />
                )}
            </div>
        </div>
    );
}

function ResultadoFinal({ pontosCidadao, pontosConsumidor, perfilInicial, onReiniciar }) {
    let titulo, texto, incentivoTexto;

    if (pontosCidadao > pontosConsumidor) {
        titulo = "Perfil: Cidadão Consciente";
        texto = "Mesmo com as dificuldades, você busca ativamente participar e transformar o espaço ao seu redor. Você entende que a cidade é uma arena de lutas e escolhe tomar parte nela.";
        if (perfilInicial === 'trabalhador') {
            texto += " Sua trajetória é uma verdadeira resistência, pois exercer a cidadania com recursos limitados exige um esforço hercúleo.";
        }
        incentivoTexto = "Sua intuição é poderosa. Para aprofundar essa consciência e transformar intuição em ação ainda mais eficaz, a leitura de 'O Espaço do Cidadão' é fundamental. O livro lhe dará as ferramentas teóricas para fortalecer sua luta por um espaço mais justo.";
    } else if (pontosConsumidor > pontosCidadao) {
        titulo = "Perfil: Consumidor Inserido";
        texto = "Suas escolhas refletem as lógicas do mercado e da conveniência individual. O sistema o moldou eficientemente como um agente de consumo.";
        if (perfilInicial === 'trabalhador') {
            texto += " Muitas vezes, essa não foi uma escolha, mas uma necessidade imposta pela sua geografia pessoal, onde as opções de consumo são as únicas viáveis.";
        }
        incentivoTexto = "Este caminho, muitas vezes imposto, pode levar a uma 'cidadania mutilada'. Entender *por que* essas são as opções mais fáceis é o primeiro passo para a mudança. 'O Espaço do Cidadão' de Milton Santos é a principal obra para diagnosticar essa realidade e vislumbrar novas possibilidades.";
    } else {
        titulo = "Perfil: O Dilema Contemporâneo";
        texto = "Você vive o conflito central da nossa era: o ser que deseja ser cidadão, mas é constantemente puxado para ser consumidor. Suas escolhas refletem essa tensão.";
        if (perfilInicial === 'media') {
            texto += " Como parte da classe média, você sente essa pressão de forma aguda, dividido entre aspirações de consumo e uma consciência cívica.";
        }
        incentivoTexto = "Navegar esta tensão é o grande desafio do nosso tempo. 'O Espaço do Cidadão' oferece um mapa para compreender as forças que nos puxam em direções opostas e como, apesar delas, é possível construir um caminho em direção a uma cidadania mais plena.";
    }

    return (
        <div id="tela-final">
            <h2 id="resultado-final-titulo">{titulo}</h2>
            <div id="resultado-final-texto">
                <p>{texto}</p>
                <div className="incentivo-livro">
                    <h4>Próximo Passo: A Leitura</h4>
                    <p>{incentivoTexto}</p>
                    <Link to="/#sobre" className="cta-livro">Saiba mais sobre o livro</Link>
                </div>
            </div>
            <button id="reiniciar-btn" onClick={onReiniciar}>Jogar Novamente</button>
            <Link to="/" className="link-voltar">Voltar ao site principal</Link>
        </div>
    );
}

export default Jogo;