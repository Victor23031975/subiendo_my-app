import React,{useState,useEffect } from 'react';
import ListaProductos from '../Productos/Productos';
import ItemDetail from '../ItemDetail/ItemDetail';



const ItemDetailContainer = () => {

    console.log (ListaProductos)

    const [producto,setProducto] = useState ({})

    const getProducto = () =>new Promise((resolve, reject) => {

        setTimeout (()=>resolve (ListaProductos.find (producto=>producto.id===1)),2000)
        
    })

    useEffect(() => {
        
     getProducto ()

     .then (response=> setProducto (response))
        
       
    }, [])

    return(<ItemDetail producto ={producto}/>)


}
    export default ItemDetailContainer