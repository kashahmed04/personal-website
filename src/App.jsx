import { Routes, Route } from "react-router-dom";
import ScrollToHash from "./components/ui/ScrollToHash.jsx";
import ScrollToTop from "./components/ui/ScrollToTop.jsx";

import Navbar from "./components/layout/Navbar.jsx";
import Hero from "./components/home/Hero.jsx";
import SelectedWork from "./components/home/SelectedWork.jsx";

import FlossBossPage from "./pages/FlossBossPage.jsx";
import PlatinumCarwashPage from "./pages/PlatinumCarwashPage.jsx";
import WatchlistMakerPage from "./pages/WatchlistMakerPage.jsx";
import SonicHangmanPage from "./pages/SonicHangmanPage.jsx";

//CONFIRM FONTS THEN DOWNLOAD THEM INSTEAD OF PULLING FROM GOOGLE (EX. IN TYPOGRAPHY.CSS)
//fix X on hamburger menu
//fix rsponsiveness and design on homepage as well as moving text in the middle
//for different screen sizes and not off the design
//fix fonts and spacing 
//make sure no yellow highlgihted text in all files 
//use extensions for file imports on all files like .jsx or .css
//make sure there are no # in links for whole site
//change file names as needed
//make sure no warnings or issues in console or whole site
//make sure to test site and everything is responsive and working properly on all screen sizes and devices
//make sure scroll bar shows up and works for whole site
//replace star with another shape that suits the site more for project nevigation
//make sure text and everything is good on site (grammar and stuff) and responsive 
//comment code properly when done 
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
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />

          <Route
            path="/projects/platinum-carwash"
            element={<PlatinumCarwashPage />}
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
        </Routes>
      </main>
    </>
  );
}

export default App;