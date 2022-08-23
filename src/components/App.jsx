import './App.css';
import {React,useState} from 'react';
import Nav from './Nabvar/Nabvar';
import {ItemListContainer} from './ItemListContainer/ItemListContainer';
import CartWidget from './Nabvar/CartWidget/CartWidget'

function App({nombre}) {

  const [cont,setCont] = useState(0);


  function contador (operacion){

    if (operacion=="+"){

      setCont(cont+1)
    }
    else{
      setCont(cont-1)
    }

  }



  return (
    <>

      
      <Nav/>
      <ItemListContainer title="Casa Lopez" subtitle= "productos"/>
      <CartWidget cont= {cont}/>




      <p>

        Contador: {cont}

      </p>

      <button className='btn btn-primary' onClick={ ()=>contador("+")}>
        +
      </button>
      
      <button className='btn btn-dark' onClick={ ()=>contador("-")}>
        -
      </button>


      
     </>
  );
} 

export default App;

