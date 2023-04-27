import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Introduction from "./components/Introduction";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Work from "./components/Work";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="mx-auto px-6 sm:max-w-lg sm:px-0 md:max-w-screen-sm lg:px-16 lg:max-w-screen-lg">
        <Introduction />
        <About />
        <Work />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
