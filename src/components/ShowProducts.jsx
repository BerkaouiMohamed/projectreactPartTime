import React, { useContext } from 'react'
import { ProductStore } from '../context/ProductsContext'

function ShowProducts() {
  const {products}=useContext(ProductStore)
  return (
    <table>

        <tr>
            <th>title</th>
            <th>price</th>
            <th>edit</th>
            <th>delete</th>
        </tr>
        {products.map((product)=><tr>

          <td>{product.title}</td>
          <td>{product.price}</td>
          <td>edit</td>
          <td>delete</td>


        </tr>)}
      
    </table>
  )
}

export default ShowProducts
