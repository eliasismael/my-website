import { Footer } from "./components/Footer";
import { Layout } from "./components/Layout";
import { Presentation } from "./components/Presentation";
import { Contact } from "./components/Contact";
import { Header } from "./components/Header/Header";
import { Experience } from "./components/Experience/Experience";
import { Projects } from "./components/Projects/Projects";
import { Skills } from "./components/Skills/Skills";
import { PresentationDesktop } from "./components/PresentationDesktop";
import useWindowWidth from "./hooks/useWindowWidth";

function App() {
  const { windowWidth } = useWindowWidth();
  return (
    <>
      <Header />
      <Layout>
        {windowWidth < 1440 ? <Presentation /> : <PresentationDesktop />}

        <Experience />
        <Skills />
        <Projects />

        <Contact />
      </Layout>
      <Footer />
    </>
  );
}

export default App;
