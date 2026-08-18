import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";

//CONFIRM FONTS THEN DOWNLOAD THEM INSTEAD OF PULLING FROM GOOGLE (EX. IN TYPOGRAPHY.CSS)
//fix X on hamburger menu
//fix rsponsiveness and design on homepage as well as moving text in the middle
//for different screen sizes and not off the design
function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
      </main>
    </>
  );
}

export default App;