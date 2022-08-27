import {React,useState} from 'react'





 function Counter({stock,onAdd}) {


        const [cont,setCont] = useState(1);


        function contador (operacion){
            
            if (operacion=="+"&& cont<stock){
  
            setCont(cont+1)
            
          
            } 
        
            else if(operacion=='Borrar'){
  
            setCont(cont==-1)
  
            }
  
  
            else {
                setCont(cont-1)
  
                if (cont<=0){
  
                setCont(cont==-1)
                 }
                }

        }
    
    return (
    
    <>

        
            
        
    
           
        
            <div className="card text-white bg-dark mt-5 mb-3" style={{maxWidth: '25rem'}}>
            
                <div className="card-body">
                <h3 className="card-title">Counter:</h3>

                <p className="card-text">Cantidad:{cont}  Stock:{stock}</p>
           
                <button type="button" className="btn btn-primary"onClick={ ()=>contador("+")}>SUMAR</button>
                <button type="button" className="btn btn-dark" onClick={ ()=>contador("Borrar")}>BORRAR</button>
                <button type="button" className="btn btn-primary"onClick={ ()=>contador("-")}>RESTAR</button>
                <button type="button" className="btn btn-dark"onClick={()=>onAdd (cont)}>Confirmar</button>
            </div>
            



            </div>
       

    </>
  )}


export default Counter