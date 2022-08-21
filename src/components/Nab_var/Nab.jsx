

import React from 'react';
import Form from '../Form/Form'
import Cart from './Cart/Cart';


const Nav = () => {
    return (
            <>
            <nav className="navbar navbar-expand-lg navbar-primary bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img  src="/asset/logo.png  " alt="logo" className='logo'/><span className='titulo'>CASA LOPEZ</span></a>
                <div className="collapse navbar-collapse"       id="navbarColor02">
   
                    <Form contBuscar= "Productos"/>

                    


                </div>
                    <Cart/> 
                </div>
                
            </nav>


            
        </>
    );
}

export default Nav;
