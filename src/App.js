import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {NavBar} from "./components/NavBar";
import {Banner} from "./components/Banner";
import {Projects} from "./components/Projects";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
        {/* <Newsletter /> */}
        <Projects/>
        <br></br>
        <br></br>
        <br></br>
        {/*<Skills />
      <Contact />
      <Footer /> */}
    </div>
  );
}

export default App;
