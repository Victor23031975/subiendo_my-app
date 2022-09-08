import './App.css';
import React from 'react';
import Nav from './Nabvar/Nabvar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';


const App= () =>{




  return (
    <>
      

      <BrowserRouter>
      <Nav />
      <Routes>
      <Route  path="/" element= {<ItemListContainer/>}></Route>
      <Route  path="/ItemListContainer/:categoria" element= {<ItemListContainer/>}></Route>
      <Route  path="/ItemDetailContainer/:id" element={<ItemDetailContainer/>}></Route>
      </Routes>
      </BrowserRouter>
     </>
  );

}


export default App;

