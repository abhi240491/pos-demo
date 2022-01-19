import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../Reducer/StateProvider";
import { getBasketTotal,getQuantity} from "../Reducer/reducer";
import axios from "axios";

function Subtotal() {
  //const history = useHistory();
  const [{ basket }, dispacth] = useStateValue();
  const handleCheckout = async () => {
      const completeBasket = [...basket];
      const quantity = getQuantity(basket)
      const subtotal = getBasketTotal(basket);
      completeBasket.push({'SUBTOTAL': subtotal});
      completeBasket.push({'QUANTITY': quantity});
    const data = JSON.stringify({order: completeBasket})

    const config = {
                        headers: {'Content-Type': 'application/json'}
                    }

                    console.log(data);
    const response = await axios.post('https://testing-server.free.beeceptor.com/users',data,config);

    console.log(response)
  };
  //console.log(basket);
  //console.log(getBasketTotal(basket))
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items):
              <strong>{value}</strong>
            </p>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} //Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={handleCheckout}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
