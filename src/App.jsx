import Intro from "./components/Intro"
import AboutMe from "./components/AboutMe"
import ProjectPage from "./components/ProjectPage"
import Skills from "./components/Skills"
import Education from "./components/Education"
import Contact from "./components/Contact"
import Navbar from "./components/Navbar"
import Page from "./components/Page"

export default function App (){

    return (
        <Page>

            <Navbar />

            <section className="border-b border-slate-100">
                <Intro />
            </section>

            <section className="border-b border-slate-100">
                <AboutMe />
            </section>
            
            <section className="border-b border-slate-100">
                <Skills />
            </section>

            <section className="border-b border-slate-100">
                <ProjectPage />
            </section>

            <section className="border-b border-slate-100">
                <Education />
            </section>

            <Contact />
        </Page>
    )
}