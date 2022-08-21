



import React from 'react';

const Form = ({contBuscar}) => {
    return (
        <>
        <form className="d-flex">
        <input className="form-control me-sm-2" type="text" placeholder={contBuscar} />
        <button className="btn btn-primary my-2 my-sm-0" type="submit">BUSCAR</button>
      </form>
        </>
    );
}

export default Form;
