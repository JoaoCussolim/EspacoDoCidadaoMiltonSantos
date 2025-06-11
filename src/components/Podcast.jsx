import React, { useEffect } from 'react';

function Podcast() {
    useEffect(() => {
        // Cria o script para a API do Spotify
        const script = document.createElement('script');
        script.src = 'https://open.spotify.com/embed-podcast/iframe-api/v1';
        script.async = true;
        document.body.appendChild(script);

        window.onSpotifyIframeApiReady = (IFrameAPI) => {
            const element = document.getElementById('embed-iframe');
            const options = {
                uri: 'spotify:episode:7KFm8Elf87Z6qMXQNoK37J',
                height: 232,
            };
            const callback = (EmbedController) => {
                EmbedController.play();
            };
            IFrameAPI.createController(element, options, callback);
        };

        return () => {
            if (script.parentNode) {
                script.parentNode.removeChild(script);
            }
            window.onSpotifyIframeApiReady = null;
        };
    }, []);

    return (
        <section id="podcast">
            <div className="container">
                <h2>Ouça o Resumo</h2>
                <p>Não tem tempo para ler agora? Ouça um resumo e uma análise da obra "O Espaço do Cidadão" neste podcast especial.</p>
                <div id="embed-iframe"></div>
            </div>
        </section>
    );
}

export default Podcast;