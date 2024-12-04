import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Timeline} from "./components/Timeline";
import {Footer} from "./components/Footer";
import {Contact} from "./components/Contact";
import {NavBar} from "./components/NavBar";
import {Banner} from "./components/Banner";

function App() {
    return (
        <div className="App">
            <NavBar/>
            <Banner/>
            {/*<Skills/>*/}
            <Timeline/>
            {/*<Projects/>*/}
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;
