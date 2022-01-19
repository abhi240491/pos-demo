import React from "react";
import './Checkout.css';
import Subtotal from '../CartTotal/Subtotal'
import {useStateValue} from '../Reducer/StateProvider'
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
    const [{basket},dispatch] = useStateValue();
    console.log("Checkout: ",basket);
        return(
            <div className="checkout">
                <div className = "checkout_left">
                    
                        <div>
                            <h3>Hello</h3>
                            <h2 className = "checkout_title">
                                Your Shopping Basket
                            </h2> 
                            {basket.map((item) => <CheckoutProduct key={item.id} id = {item.id}/>
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