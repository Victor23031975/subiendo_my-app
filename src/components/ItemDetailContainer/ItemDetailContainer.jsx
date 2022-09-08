import React,{useState,useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import { useParams } from 'react-router-dom';
import Counter from '../ItemListContainer/Counter';


const ItemDetailContainer = () => {


   const[producto,setProductoCard] =useState([])

   const {id}= useParams()
   console.log(id)

   useEffect(()=>{
    
    fetch ("../Json/productos.json")
    .then (response => response.json())
    .then (data => {


        const producto1 = data.find (producto=> producto.id == id)
        
        setProductoCard(producto1)

        

    })
       
    

   },[])


   


return(

    
    <div className='row'>
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
                    <button className='btn btn-dark'>COMPRAR</button>
                    
                </div>
            </div>
        </div>
        </div>

 
    </div>
    
    
    


)




}






    export default ItemDetailContainer