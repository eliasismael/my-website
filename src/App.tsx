import { Footer } from "./components/Footer";
import { Layout } from "./components/Layout";
import { Presentation } from "./components/Presentation";
import { Contact } from "./components/Contact";
import { Header } from "./components/Header/Header";
import { Experience } from "./components/Experience/Experience";
import { Projects } from "./components/Projects/Projects";
import { Skills } from "./components/Skills/Skills";

function App() {
  return (
    <>
      <Header />
      <Layout>
        <Presentation />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </Layout>
      <Footer />
    </>
  );
}

export default App;
