import React, { useEffect } from "react";
import "../Styles/navbar.css";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    NavLink,
} from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Login from "./Login";
import Signup from "./Signup";
import Header from "./Header";
import Logo from "../Assets/Logo.png"

const Navbar = () => {
    useEffect(() => {
        const hamburger = document.getElementById("hamb");
        const navLinks = document.getElementsByClassName("nav-links");
        const links = document.querySelectorAll(".nav-links li");
        hamburger.addEventListener('click', () => {
            //Animate Links
            navLinks[0].classList.toggle("open");
            console.log("Links are : ", links);
            links.forEach(link => {
                link.classList.toggle("fade");
            });
            //Hamburger Animation
            hamburger.classList.toggle("toggle");
        });
    }, []);
    return (
        <>
            <Router>
                <nav>
                    <img className="logo" src={Logo} alt="Logo Image" />
                    <div className="hamburger" id="hamb">
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                    </div>
                    <ul className="nav-links">
                        <li id="schemli"><NavLink id="schemli" to="" >Home</NavLink></li>
                        <li><NavLink id="schemli" to="" >ABOUT US</NavLink></li>

                        <div className="dropdown">
                            <li id="schemli">Schemes</li>
                            <div className="dropdown-content" id="scheme">
                                <div className=""><NavLink to="">Hello World</NavLink></div>
                                <div className=""><NavLink to="">Hello World</NavLink></div>
                                <div className=""><NavLink to="">Hello World</NavLink></div>
                                <div className=""><NavLink to="">Hello World</NavLink></div>
                            </div>
                        </div>

                        <li><NavLink id="schemli" to="">Contact Us</NavLink></li>

                        <div className="collapse1 navbar-collapse1" id="navbarsExample02">

                            <form className="d-flex" role="search">
                                <input className="form-control me-2" id="shrey" type="search" placeholder="Search" aria-label="Search" />

                                <div id="tilak">
                                    <NavLink id="schemli search_btn" to="" ><i className="fas fa-search" id="magnify"></i>
                                    </NavLink>
                                </div>
                            </form>
                        </div>
                        <li><button className="login-button" to="">Login/Sign up</button></li>
                    </ul>
                </nav>
                <Routes>
                    <Route exact path="/" element={<Header />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/signup" element={<Signup />}></Route>
                    <Route path="/contact" element={<Contact />}></Route>
                </Routes>
            </Router >
        </>
    );
};

export default Navbar;
