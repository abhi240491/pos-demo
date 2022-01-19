import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "../Reducer/StateProvider";

function CheckoutProduct({id}) {
  const [{ basket }, dispatch] = useStateValue();
  const index = basket.findIndex(item => item.id === id)
  const removeFromBasket = () =>
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  const handleInc = () => {
      
    dispatch({
      type: "INC_TO_BASKET",
      item: {
        id: id,
    }
    });
  };
  const handleDec = () => {
    dispatch({
      type: "REDUCE_FROM_BASKET",
      id: id
    });
  };
  return (
    <div className="checkoutProduct">
      <div className="checkoutProduct-img-info">
        <div>
          <img className="checkoutProduct-image" src={basket[index].image} alt="" />
        </div>
        <div className="checkoutProduct-info">
          <p className="checkoutProduct-title">{basket[index].title}</p>
          <p className="checkoutProduct-price">
            {" "}
            Price
            <small> $</small>
            <strong>{basket[index].price}</strong>
          </p>
          <div className="checkoutProduct-rating">
            {Array(basket[index].rating)
              .fill()
              .map((_, i) => (
                <p>&#127775;</p>
              ))}
          </div>
          <div>
            <button className="checkoutProduct-inc-dec" onClick={handleInc}>
              +
            </button>
            <input
              className="checkoutProduct-quantity"
              name="quantity"
              value={basket[index].quantity}
              type="text"
            />
            <button className="checkoutProduct-inc-dec" onClick={handleDec}>
              -
            </button>
          </div>
        </div>
      </div>
      <div className="checkoutProduct-remove">
        <button
          className="checkoutProduct-remove-button"
          onClick={removeFromBasket}
        >
          Remove from Basket
        </button>
      </div>
    </div>
   )
}
export default CheckoutProduct;
