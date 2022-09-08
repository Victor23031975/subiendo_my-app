import React,{useState,useEffect } from 'react';
import Counter from './Counter'
import { BiLibrary } from 'react-icons/bi';
import ItemList from '../ItemList/ItemList';
import{Link} from 'react-router-dom';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {


    function onAdd(cont){

    }



const [productos,setProductos] = useState ([]);

const {categoria}= useParams()


useEffect (()=>{


fetch ("../Json/productos.json")
.then (response => response.json())

.then ((data)=> {if (categoria)
    
     { const productoF= data.filter(item=> item.categoria === categoria) 
    setProductos(productoF)
    
    }


    else{ setProductos(data)}
    
    
 } )
    
    



},[categoria]);




return (
    <>
       

            <ItemList list= {productos} />

       
        
        
    </> 
);



}










export default ItemListContainer