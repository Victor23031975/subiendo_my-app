
    import React  from 'react'
    import Item from '../Item/Item'
    import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'


const ItemList = ({list}) => {



return (

    <div className='container d-flex justify-content-between '>
    <div className='row '
       >


  
    { list.map ((producto,indice) =><Item producto={producto} key={indice}/>,


   )}

    </div>
    </div>   


  

)

}


export default ItemList 






