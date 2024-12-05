import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Timeline} from "./components/Timeline";
import {Footer} from "./components/Footer";
import {Contact} from "./components/Contact";
import {NavBar} from "./components/NavBar";
import {Banner} from "./components/Banner";
import {Projects} from "./components/Projects";
import {Skills} from "./components/Skills";

function App() {
    return (
        <div className="App">
            <NavBar/>
            <Banner/>
            <Timeline/>
            <Projects/>
            <Skills/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;
