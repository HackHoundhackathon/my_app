import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useState,useEffect} from 'react'
import logo from '../assets/images/logo.png';
import {
    BrowserRouter as Router
  } from "react-router-dom";

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home')
    const[scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 60) {
                setScrolled(true)
            } else{
                setScrolled(false)
            }
        } 
        window.addEventListener("scroll", onScroll)

        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return ( 
        <Router>
            <Navbar bg = "dark" variant = "dark" className={scrolled ? "scrolled":""}>
                <Container >
                    <Navbar.Brand href = "#home" >
                        <img src={logo} alt="Logo" />
                    </Navbar.Brand>  
                    <Nav className = "me-auto" >
                        <Nav.Link href = "#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>
                            Home 
                        </Nav.Link>  
                        <Nav.Link href = "#features" className={activeLink === 'features' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('features')}>
                            Features 
                        </Nav.Link>  
                        <Nav.Link href = "#pricing" className={activeLink === 'team' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('team')}>
                            Team
                        </Nav.Link>
                        <Nav.Link href = "#login">
                            Login
                        </Nav.Link>  
                    </Nav> 
                </Container> 
            </Navbar>
        </Router>
    )
}