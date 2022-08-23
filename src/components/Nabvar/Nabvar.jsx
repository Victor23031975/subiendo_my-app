

import React from 'react';
import Form from '../Form/Form'
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import CartWidget from './CartWidget/CartWidget';
import { BiCart } from 'react-icons/bi';
const Nav = () => {
    return (
            <>
            <nav className="navbar navbar-expand-lg navbar-primary bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img  src="/asset/logo.png  " alt="logo" className='logo'/></a>
                  
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
                     
                 <BiCart  className='icon'/>
                </div>
                
            </nav>


            
        </>
    );
}

export default Nav;
