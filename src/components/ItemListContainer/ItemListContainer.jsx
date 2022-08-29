import React from 'react';
import Counter from './Counter'
import Productos from '../Productos/Productos'
import { BiLibrary } from 'react-icons/bi';


const ItemListContainer = () => {

  

    function onAdd(cont){
       
       console.log(`Se seleccionaron ${cont} productos`)

    }
    
    return (
        <>
            <Counter stock={10} onAdd={onAdd}/>  
            
        </>
    );
}

export default ItemListContainer




