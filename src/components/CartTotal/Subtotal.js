import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../Reducer/StateProvider";
import { getBasketTotal, getBasketTotalQuantity } from "../Reducer/reducer";
import axios from "axios";

function Subtotal() {
  //const history = useHistory();
  const [{ basket }, dispacth] = useStateValue();
  const totalQuantity = getBasketTotalQuantity(basket);
  const totalPrice = getBasketTotal(basket)
  const handleCheckout = async () => {
    const completeBasket = [...basket];
    completeBasket.push({ TOTAL: totalPrice });
    completeBasket.push({'QUANTITY': totalQuantity});
    const data = JSON.stringify({ order: completeBasket });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const response = await axios.post(
      "https://testing-server.free.beeceptor.com/users",
      data,
      config
    );
    console.log(response);

  };
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({totalQuantity}) items):
              <strong>{value}</strong>
            </p>
          </>
        )}
        decimalScale={2}
        value={totalPrice} //Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={handleCheckout}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
