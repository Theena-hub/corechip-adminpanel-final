import React, { useState } from "react";
import { NavDropdown } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


const Navigation = () => {
    const history = useNavigate();

    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen((prevIsOpen) => !prevIsOpen);
    };

    return (
        <>
            {/* navbar - start */}
            <div className="container-fluid mt-3 sticky-top">
                <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-md">
                    <div className="container-fluid p-2">
                        <a className="navbar-brand primaryColor mr-0">
                            <img className="logo" src={logo} alt="image" />
                        </a>
                        <div className="form-inline ml-auto">
                            <div className="btn bgPrimaryColor p-14" onClick={toggleSidebar}>
                                <i className="fa fa-bars"></i>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className={`sidebar ${isOpen === true ? 'active' : ''}`}>
                    <div className="sd-header">
                        <Link to="/">
                            <img className="logo" src={logo} alt="image" />
                        </Link>
                        <div className="btn bgPrimaryColor p-14" onClick={toggleSidebar}>
                            <i className="fa fa-times"></i>
                        </div>
                    </div>
                    <div className="sd-body">
                        <ul>
                            <Link to="/">
                                <li>
                                    <p className="sd-link">Dashboard</p>
                                </li>
                            </Link>
                            <li>
                                <p className="sd-link">
                                    <NavDropdown title="Banners" id="basic-nav-dropdown">
                                        <NavDropdown.Item>
                                            <Link to="/addbanners" className="sd-link">Add Banners</Link>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item>
                                            <Link to="/viewbanners" className="sd-link">View Banners</Link>
                                        </NavDropdown.Item>                                        
                                    </NavDropdown>
                                </p>
                            </li>
                            <li>
                                <p className="sd-link">
                                    <NavDropdown title="Products" id="basic-nav-dropdown">
                                        <NavDropdown.Item>
                                            <Link to="/addproducts" className="sd-link">Add Products</Link>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item>
                                            <Link to="/viewproducts" className="sd-link">View Products</Link>
                                        </NavDropdown.Item>
                                        {/* Add more dropdown items as needed */}
                                    </NavDropdown>
                                </p>
                            </li>                            
                            <Link to="/viewprice">
                                <li>
                                    <p className="sd-link">Price List</p>
                                </li>
                            </Link>
                            <Link to="/users">
                                <li>
                                    <p className="sd-link">Users</p>
                                </li>
                            </Link>
                            {/* <Link to="/payments">
                                <li>
                                    <p className="sd-link">Payments</p>
                                </li>
                            </Link> */}
                            <Link to="/contactus">
                                <li>
                                    <p className="sd-link">Contactus</p>
                                </li>
                            </Link>
                            <Link to="/signin">
                                <li>
                                    <p className="sd-link">Logout</p>
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>
                <div className={`sidebar-overlay ${isOpen === true ? 'active' : ''}`} onClick={toggleSidebar}></div>
            </div>
            {/* navbar - end */}
        </>
    );
};

export default Navigation;
