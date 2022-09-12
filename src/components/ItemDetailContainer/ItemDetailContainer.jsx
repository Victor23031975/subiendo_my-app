import React,{useState,useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import Counter from '../counter/Counter';



const ItemDetailContainer = () => {


   const[producto,setProductoCard] =useState([])
   
   const {id}= useParams()
 

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
        
       <ItemDetail producto={producto}/>
      
    </div>


)


}


    export default ItemDetailContainer