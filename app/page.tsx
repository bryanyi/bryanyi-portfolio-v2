import About from "./components/About";
import Footer from "./components/Footer";
import Introduction from "./components/Introduction";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Work from "./components/Work";

export default function Home() {
  return (
    <>
      <main className="">
        <header>
          <Nav />
        </header>

        <section className="max-w-screen-lg mx-auto">
          <Introduction />
          <About />
          <Work />
          <Projects />
        </section>

        <footer>
          <Footer />
        </footer>
      </main>
    </>
  );
}
