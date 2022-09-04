import React from 'react'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import Counter from '../ItemListContainer/Counter'


 const ItemDetail = ({producto}) => {

console.log (producto)


function onAdd(cont){

       
       

}



  return (

  
    
            
<div className='container d-flex justify-content-center  '>


  <div className="card  text-white bg-light mb-3  " style={{maxWidth: '20rem'}}>
     <img style={{width: '15rem'  }}src= {producto.imagen}alt={producto.name} />
    
  </div>  
    <div className="card text-white bg-primary mb-3" style={{maxWidth: '50rem'}}>  
    
    <div className="card-body">
     

      <h3 className="card-text">{producto.descripcion}</h3>
      <p>{producto.comentario}</p>
      <h5 className="card-text">Precio: $ {producto.precio}</h5> <h5>en 12 pagos de :{(producto.precio+(producto.precio*0.50/12)).toFixed(2)}</h5>

    
   </div>
   <Counter stock={producto.stock} onAdd= {onAdd}/> 
  </div>   


    

    
</div>



    
    
  
    
    
    
  )
}



export default ItemDetail