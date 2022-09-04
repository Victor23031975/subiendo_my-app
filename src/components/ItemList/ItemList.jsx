
    import React  from 'react'
    import Item from '../Item/Item'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'


const ItemList = ({list}) => {



return (

    <div className='container d-flex justify-content-between '>
    <div className='row '
       >


  
    { list.map ((productos,indice) =>



     
        <Item productos={productos} key={indice}/>,
       

    




   )}

    </div>
    </div>   


  

)

}


export default ItemList 





