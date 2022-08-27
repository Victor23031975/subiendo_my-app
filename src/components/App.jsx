import './App.css';
import React from 'react';
import Nav from './Nabvar/Nabvar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import CartWidget from './Nabvar/CartWidget/CartWidget'

function App({nombre}) {




  return (
    <>

      
      <Nav />
      <ItemListContainer title="Casa Lopez" subtitle= "productos"/>
      <CartWidget/>
     



     
      
      
     </>
  );

}


export default App;

