import React from "react";
import './Checkout.css';
import Subtotal from '../CartTotal/Subtotal'
import {useStateValue} from '../Reducer/StateProvider'
import CheckoutProduct from "./CheckoutProduct";
import { InsertEmoticon } from "@material-ui/icons";
function Checkout() {
    const [{basket},dispatch] = useStateValue();
        return(
            <div className="checkout">
                <div className = "checkout_left">
                    
                        <div>
                            <h3>Hello</h3>
                            <h2 className = "checkout_title">
                                Your Shopping Basket
                            </h2> 
                            {basket.map((item) => <CheckoutProduct id = {item.id} image = {item.image} title = {item.title} price = {item.price} rating = {item.rating}
                                                    />
                                    )}
                        </div>                        
                </div>
                <div className = "checkout_right">
                    <h2 className = "checkout_bill">
                           <Subtotal/>
                    </h2>
                </div>    
            </div>
        )
}

export default Checkout;