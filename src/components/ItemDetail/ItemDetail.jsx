import {React,useState} from 'react';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import Counter from '../counter/Counter';



  const ItemDetail=  ({producto})=>{

    



    function agregarCarrito (producto,cantidad) {
    
      const productoCarrito= {id:producto.id, cantidad:cantidad}
    
      console.log(productoCarrito)
    
    }


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

                    <Counter producto={producto}  agregarCarrito={agregarCarrito}/>
                    
                </div>
            </div>
        </div>
        </div>  
    
  
    
  )

  }


export default ItemDetail