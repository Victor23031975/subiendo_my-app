import {React,useState } from 'react';
import imagen1 from '../asset/img/imagen1.webp'
import imagen2 from '../asset/img/imagen2.webp'
import imagen3 from '../asset/img/imagen3.webp'
import imagen4 from '../asset/img/imagen4.webp'
import imagen5 from '../asset/img/imagen5.webp'
import imagen6 from '../asset/img/imagen6.webp'
import imagen7 from '../asset/img/imagen7.webp'
import imagen8 from '../asset/img/imagen8.webp'
import imagen9 from '../asset/img/imagen9.webp'

     const productos=[
       

    {name:"DV CATENA", precio: 10000, imagen:imagen3,stock: 10
    
    },
    
    {name:"ANGELICA CATENA", precio: 15000, imagen: imagen4,stock: 10
    
    },
    
    {name:"SALENTEIN", precio: 12000, imagen: imagen5,stock: 10
    
    },
    
    {name:"MACALLAN", precio: 39500, imagen:imagen7,stock: 10
    
    },
    
    {name:"JW, Black Label", precio: 9000, imagen:imagen8,stock: 10
    
    },
    
    {name:"Clynelish 14", precio: 16000, imagen:imagen9,stock: 10
    
    },
    {name:"Malaria Gin", precio: 11000, imagen:imagen1,stock: 10
    
    },
    
    {name:"Ron, Santa Teresa", precio: 7000, imagen:imagen2,stock: 10
    
    },
    {name:"Vodka Beluga", precio: 11200, imagen:imagen6,stock: 10
    
    }
    ]

    function consultarPromesa(confirmacion){

    
        return new Promise  ((res,rej) =>{
        
        if(confirmacion){
            
            res(productos)
        } 
        else {
            rej("incorrecto")
        }
        
        
        
        })
        
        }




const Productos = () => {

    const [productos,setProductos] = useState ([])

 

        consultarPromesa(true)
        
        .then (productos=>{
            
            const productosJSX = productos.map((producto,indice)=>

                <div className="card text-white bg-primary m-5 mb-3   " key={indice} style={{maxWidth: '18rem'  }}>
                   <div className='card image mt-2'> <img style={{width: '15rem'  }}src= {producto.imagen}alt={producto.name} /></div>
                    <div className="card-body m-2 mt-2">
                  <hr />
                   <h4 className="card-title">{producto.name}</h4>
                   <p className="card-text">Precio: $ {producto.precio}</p>
                   <p className="card-text">Stock: {producto.stock}</p>
                
                </div>
                </div>

        )
        
        setProductos( productosJSX )
        
        })
        
        .catch(error=> {console.error(error)})



    return (

        <div className='container d-flex justify-content-center '>
        <div className='row '
        >
          {productos}

        </div>
        </div>
    );
}

export default Productos;





