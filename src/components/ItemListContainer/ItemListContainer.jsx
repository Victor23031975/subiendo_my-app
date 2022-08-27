import React from 'react';
import Counter from './Counter'



const ItemListContainer = ({title,subtitle}) => {

    function onAdd(cont){
       
       console.log(`Se seleccionaron ${cont} productos`)

    }
    
    return (
        <>
            <h3>{title}</h3>    
            <h3>{subtitle}</h3> 
            <Counter stock={5} onAdd={onAdd}/>  
          
        </>
    );
}

export default ItemListContainer




