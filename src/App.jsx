import { Routes, Route } from "react-router-dom";
import ScrollToHash from "./components/ui/ScrollToHash.jsx";
import ScrollToTop from "./components/ui/ScrollToTop.jsx";

import Navbar from "./components/layout/Navbar.jsx";
import Hero from "./components/home/Hero.jsx";

import SelectedWork from "./components/home/SelectedWork.jsx";
import FlossBossPage from "./pages/FlossBossPage.jsx";
import PlatinumCarWashPage from "./pages/PlatinumCarWashPage.jsx";
import WatchlistMakerPage from "./pages/WatchlistMakerPage.jsx";
import SonicHangmanPage from "./pages/SonicHangmanPage.jsx";
import AnimeFinderPage from "./pages/AnimeFinderPage.jsx";

import AboutPage from "./pages/AboutPage.jsx";

import Footer from "./components/layout/Footer.jsx";

//homepage content
function HomePage() {
  return (
    <>
      <Hero />
      <SelectedWork />
    </>
  );
}

function App() {
  return (
    <>
      <ScrollToTop />
      <ScrollToHash />
      <Navbar />

      <main>
        {/*page routes*/}
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />

          <Route
            path="/projects/platinum-carwash"
            element={<PlatinumCarWashPage />}
          />

          <Route
            path="/projects/floss-boss"
            element={<FlossBossPage />}
          />

          <Route
            path="/projects/watchlist-maker"
            element={<WatchlistMakerPage />}
          />

          <Route
            path="/projects/sonic-hangman"
            element={<SonicHangmanPage />}
          />

          <Route
            path="/projects/anime-finder"
            element={<AnimeFinderPage />}
          />

          <Route
            path="/about"
            element={<AboutPage />}
          />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;