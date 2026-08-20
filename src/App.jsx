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

import AboutPreview from "./components/home/AboutPreview.jsx";
import Footer from "./components/layout/Footer.jsx";

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
//make sure to change all placeholder stuff and text and check over everything 
//and make sure it all good
//make sure elements are named properly and make sense (like eyebrow elements and stuff)
//remove extra code (like typography stuff since I changed it and everything else) when website is done
//link to this project on website and resume with github link and everywhere else 
//fix __ on different elements and see if it is the standard (see standard for all elements and change if needed)
//make sure fonts are good on whole site and properly sized and look fine with everything else
//fix responsiveness of the about me and contact sections (too long vertical text as screen gets smaller and maybe align photo with button and text)
//make sure everything is responsive at all screens sizes when project is done 
//should we include github in contact section or no because it is not technically a contact
//fix top hero animation to fit with text with enough vertical space regardless of screen size
//fix title on resume to be more detailed for what I do (same with LinkedIn) and make both detailed
//fix links to different pages and page locations (to not show #) (and fix animation to go back to top of home page for initials)
function HomePage() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <AboutPreview />
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

      <Footer />
    </>
  );
}

export default App;