import React,{useState,useEffect } from 'react';
import Counter from './Counter'
import ListaProductos from '../Productos/Productos'
import { BiLibrary } from 'react-icons/bi';
import ItemList from '../ItemList/ItemList';


const ItemListContainer = () => {

    const [productos,setProductos] = useState ([])

    useEffect(() => {
        
        const getListaProductos= new Promise((resolve, reject) => {

            
            setTimeout(() => {
                resolve(ListaProductos)
            }, 2000);
        })

        getListaProductos
        .then ((response)=>setProductos(response))

       
    }, []);



   
    function onAdd(cont){

       
       

    }
    
    return (
        <>
           
            <ItemList list= {productos}/>
            
        </> 
    );
}

export default ItemListContainer




