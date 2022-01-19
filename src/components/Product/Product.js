import React,{useState} from "react";
import "./Product.css";
import {useStateValue} from '../Reducer/StateProvider'
function Product( {id,title,image, price, rating} ){
    const [state, dispatch] = useStateValue();
    const [quantity,setQuantity] = useState(1);
    const [subTotal,setSubTotal] = useState(price);
    const addToBasket = async () =>{
        setQuantity(quantity+1);
        setSubTotal(subTotal+price);
        console.log(quantity);
        await dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
                quantity: quantity,
                subTotal: subTotal,
            }
        })    //dispatch the item into data layer....
    }
    return(
        <div className = "product">
            <div className = 'product-details'>
                <div className = "product-name">
                    {title}
                </div>
                <div className = 'product-price'>
                    <small>$</small><strong>{price}</strong>            
                </div>
                <div >
                    <button className='product-button' onClick = {addToBasket}>Add to Basket</button>
                </div>   
            </div>
            <div className='product-image'>
                <img 
                    src = {image}
                     alt = ""
                     />                 
                    
            </div>
        </div>
    )
}

export default Product;
