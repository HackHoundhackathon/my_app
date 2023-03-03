import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/Navbar';
import { Banner } from "./components/Banner";
import { Features } from './components/Features';
import { Team } from './components/Team';
import { Footer } from './components/Footer';


function App() {
    return ( 
        <div className = "App" >
            <NavBar/>
            <Banner/>
            <Features/>
            <Team/>
            <Footer/>
        </div>
    );
}

export default App;