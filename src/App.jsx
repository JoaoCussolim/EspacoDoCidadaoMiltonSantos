import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Hero from './components/Hero';
import SobreLivro from './components/SobreLivro';
import SobreAutor from './components/SobreAutor';
import Importancia from './components/Importancia';
import Divulgacao from './components/Divulgacao';
import JogoCTA from './components/JogoCTA';
import Footer from './components/Footer';
import Jogo from './components/Jogo';

function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SobreLivro />
        <Podcast />
        <SobreAutor />
        <Importancia />
        <Divulgacao />
        <JogoCTA />
      </main>
      <Footer />
    </>
  );
}


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/jogo" element={<Jogo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;