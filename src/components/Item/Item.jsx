import React from "react";
import ItemList from "../ItemList/ItemList";
const Item =({productos,indice}) =>{


return(


   


    <div className="card text-white bg-primary m-5 mb-3   " key= {indice} style={{maxWidth: '18rem'  }}>
       <div className='card image mt-2'> <img style={{width: '15rem'  }}src= {productos.imagen}alt={productos.name} /></div>
        <div className="card-body m-2 mt-2">
      <hr />
       <h4 className="card-title">{productos.name}</h4>
       <p className="card-text">Precio: $ {productos.precio}</p>
       <p className="card-text">Stock: {productos.stock}</p>
    
    
    </div>
    </div>


   
    

    

  






)


}

export default Item