import React from 'react';
import Product from './Product';

function ProductList(props) {
 
 
  return (
          props.productList.length > 0 ?
           props.productList.map((product,i)=>{
             return <Product product={product} key={i}
            incrementQunatity={props.incrementQunatity}
            index={i}
            decrementQuantity={props.decrementQuantity}
            index={i}
            removeItem={props.removeItem}
          />
        
    }):<h1> Item is empty</h1>
        
  )
}

export default ProductList;
