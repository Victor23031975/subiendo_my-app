

import React from 'react';
import Form from '../Form/Form';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import { BiCart } from 'react-icons/bi';




const Nav = ({cont}) => {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-primary bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img  src="logo.png  " alt="logo" className='logo'/></a>
                  
                    <div className="collapse navbar-collapse"       id="navbarColor0"> 
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#">CASA LOPEZ</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">NOSOTROS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">PRODUCTOS</a>
                            </li>   
                        </ul>
                            <Form  contBuscar= "productos" />
                    </div>


                
                     
                    <span style={{color:"white"}}><BiCart  className='icon'/>{cont}</span>

                </div>
                
            </nav>
        </>
    );
}

export default Nav;
