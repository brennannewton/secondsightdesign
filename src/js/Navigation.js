// Components
import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

// Images
import Menu from '../img/menu_1x_ivory.png';
import Logo from '../img/ivory_tp.png';
import Facebook from '../img/fb_ivory.png';
import Instagram from '../img/ig_ivory.png';

// Styles
import '../css/Navigation.css';

export default class Navigation extends React.Component {
    render() {
        return (
            <div className="Navigation-Cmpnt w-100">
                <Navbar collapseOnSelect expand="lg" className="Bar m-0 p-0">
                    <Navbar.Brand as={Link} to="/" className="Logo-L mr-auto">
                        <img src={Logo} 
                            alt="Second Sight Design logo - a pair of glasses with eyes looking through them"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className="Menu ml-auto">
                        <img src={Menu} alt="Menu icon"/>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="Internal mr-auto align-items-center">
                            <Nav.Link as={Link} to="shop">
                                <p>Shop</p>
                            </Nav.Link>
                            <Nav.Link as={Link} to="about">
                                <p>About</p>
                            </Nav.Link>
                        </Nav>
                        <Nav className="Logo-C m-auto align-items-center">
                            <Nav.Link as={Link} to="/">
                                <img src={Logo}
                                    alt="Second Sight Design logo - a pair of glasses with eyes looking through them"
                                />
                            </Nav.Link>
                        </Nav>
                        <Nav className="Contact ml-auto align-items-center">
                            <Nav.Link as={Link} to="contact">
                                <p>Contact</p>
                            </Nav.Link>
                            <a href="https://www.facebook.com/second.sight.vintage/" target="_blank" rel="noopener noreferrer">
                                <img id="ig" src={Facebook} alt="Facebook icon"/>
                            </a>
                            <a href="https://www.instagram.com/emma.lee.makes.jewelry/" target="_blank" rel="noopener noreferrer">
                                <img id="gh" src={Instagram} alt="Instagram icon"/>
                            </a>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}