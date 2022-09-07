import {React,useState} from 'react';







    function Counter({stock,onAdd}) {
        

        const [cont,setCont] = useState(1);
        
        function agregar (){
            if (cont<stock) {setCont(cont+1)}
            
        }

        function quitar (){

            if(cont>1){setCont(cont-1)}
            
        }

        function reset (){

            setCont(1)
        }

       
    
    return (
    
    <>

        <div className="card text-white bg-dark m-5 mb-3 container d-flex justify-content-center border-primary" style={{maxWidth: '25rem'}}>
            
            <div className="card-body  ">
                <h3 className="card-title ">Counter:</h3>
                <p className="card-text d-flex justify-content-center">Cantidad:  {cont}  Stock:  {stock}</p>
                <div className=" d-flex justify-content-center">
                    <button  className="btn btn-primary m-1"onClick={ agregar}>+</button>
                    <button  className="btn btn-primary m-1" onClick={ reset}>BORRAR</button>
                    <button  className="btn btn-primary m-1"onClick={ quitar}>-</button>    
                    <button  className="btn btn-primary m-1 "onClick={()=>onAdd (cont)}>AGREGAR</button>
                   
                </div > 

                
            </div>
            
              


        </div>
       

    </>
  )}


export default Counter