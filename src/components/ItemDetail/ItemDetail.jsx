import React,{useState,useEffect } from 'react';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import Counter from '../ItemListContainer/Counter';



  const ItemDetail=  ({producto})=>{
    


  return (

    
  
      <div className="card m-5" style={{maxWidth: '1000px'}}>
        <div className="row g-0">
            <div className="col-md-4">
                <img style={{width: '15rem'  }}src={"../img/"+ producto.imagen} className="" alt="..." />
            </div>
              <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{producto.name}</h5>
                    <p className="card-text">Precio: $ {producto.precio}</p>
                    <p className="card-text">Stock :{producto.stock} unidades</p>
                    <p className="card-text"> {producto.descripcion}</p>

                    <Counter producto={producto}/>
                    
                </div>
            </div>
        </div>
        </div>
    
  
    
  )

  }


export default ItemDetail