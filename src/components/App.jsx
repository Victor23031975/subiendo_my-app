import './App.css';
import React from 'react';
import Nav from './Nab_var/Nab';
import ItemListContainer from './ItemListContainer/ItemListContainer';

function App({nombre}) {
  return (
    <>

      
      <Nav/>
      <ItemListContainer tittle="Productos"/>
      
     </>
  );
}

export default App;

