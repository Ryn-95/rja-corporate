import { Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/Home';
import PrestigeSecuritePage from './pages/PrestigeSecurite';
import RobbinJamesHolding from './pages/RobbinJamesHolding';
import AIDHoldings from './pages/AIDHoldings';
import NotreGroupe from './pages/NotreGroupe';
import Histoire from './pages/Histoire';
import NotreFutur from './pages/NotreFutur';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      <ScrollToTop />
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/notre-groupe" element={<NotreGroupe />} />
          <Route path="/histoire" element={<Histoire />} />
          <Route path="/notre-futur" element={<NotreFutur />} />
          <Route path="/prestige-securite" element={<PrestigeSecuritePage />} />
          <Route path="/robbin-james-holding" element={<RobbinJamesHolding />} />
          <Route path="/aid-holdings" element={<AIDHoldings />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
