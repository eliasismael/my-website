import Footer from "./components/Footer";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Presentation from "./components/Presentation";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Header />
      <Layout>
        <Presentation />
        <ProjectsSection />
        <SkillsSection />
        <Contact />
      </Layout>
      <Footer />
    </>
  );
}

export default App;
