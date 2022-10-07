import React from "react";
import "./Navbar.css";
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

const Navbar = () => {
    return (
        <>
            <Router>
                {/* <main>

                    <nav className="navbar navbar-expand navbar-dark nav1" aria-label="Second navbar example">
                        <div className="container-fluid">

                            <NavLink to="home.html" ><img className="nav_img" src="NavJivan Pharma Logo.png" alt="Image not available" /></NavLink>

                            <div className="collapse navbar-collapse" id="navbarsExample02">

                                <form className="d-flex" role="search">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />

                                    <div id="tilak">
                                        <NavLink to="/about" id="search_btn" >Search</NavLink>
                                    </div>
                                    <button className="btn btn-outline-success" type="submit">Search</button>
                                </form>
                            </div>
                            <div className="nav-links">
                                <ul className="navbar-nav me-auto">
                                    <li className="nav-item">
                                        <NavLink className="nav-link" aria-current="page" to="/about">Home</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/about" >About</NavLink>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <NavLink className="nav-link dropdown-toggle" to="/about" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                                            Dropdown
                                        </NavLink>
                                        <ul className="dropdown-menu">
                                            <li><NavLink className="dropdown-item" to="/about" >Action </NavLink></li>
                                            <li><NavLink className="dropdown-item" to="/about" >Another action </NavLink></li>
                                            <li><NavLink className="dropdown-item" to="/about" >Something else here </NavLink></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/about" >Contact Us</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/about" >FAQs</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/about" >Login/Signup</NavLink>
                                    </li>

                                </ul>
                            </div>
                        </div>

                    </nav>
                </main> */}
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
