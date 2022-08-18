

import React from 'react';
import Form from './Form'



const Nav = () => {
    return (
        <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Navbar</a>
        <div className="collapse navbar-collapse" id="navbarColor02">
   
            <Form contBuscar= "Productos"/>
        </div>
        </div>
    </nav>


            
        </>
    );
}

export default Nav;
