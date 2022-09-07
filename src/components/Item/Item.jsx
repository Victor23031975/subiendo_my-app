import React from "react";
import ItemList from "../ItemList/ItemList";
import{Link} from 'react-router-dom';



const Item =({producto,indice}) =>{


  


return(<div className="card text-white bg-primary m-5 mb-3   " key= {indice} style={{maxWidth: '18rem'  }}>
<div className='card image mt-2'> <img style={{width: '15rem'  }} src= {"./img/" + producto.imagen} alt={producto.name} /></div>
 <div className="card-body m-2 mt-2">
  <hr />
  <h4 className="card-title">{producto.name}</h4>
  <p className="card-text">Precio: $ {producto.precio}</p>
  <p className="card-text">Stock: {producto.stock}</p>
  <button className='btn btn-dark text-light'><Link className='nav-link'   to={"/itemDetailContainer/"+ producto.id}>DETALLE</Link></button>
</div>
</div>)


}
export default Item

