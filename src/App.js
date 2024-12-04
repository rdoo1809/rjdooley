import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Timeline} from "./components/Timeline";
import {Footer} from "./components/Footer";
import {Contact} from "./components/Contact";
import {NavBar} from "./components/NavBar";
import {Banner} from "./components/Banner";
import {Projects} from "./components/Projects";

function App() {
    return (
        <div className="App">
            <NavBar/>
            <Banner/>
            <Timeline/>
            {/*<Skills/>*/}
            <Projects/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;
