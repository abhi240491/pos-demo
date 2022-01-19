export const initialState = {
  basket: [],
};
//Selector
export const getBasketTotal = (basket) => {
  return basket.reduce((amount, item) => item.subTotal + amount, 0);
};
export const getBasketTotalQuantity = (basket) => {
  return basket.reduce(
    (totalQuantity, item) => item.quantity + totalQuantity,
    0
  );
};
const reducer = (state, action) => {
  //console.log(action)
  switch (action.type) {
    case "ADD_TO_BASKET": {
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.item.id
      );
      console.log("Index:", index, "Action:", action.item.id);
      if (index >= 0) {
        //do magic
        let newBasket = [...state.basket];
        newBasket[index].quantity = action.item.quantity;
        newBasket[index].subTotal = action.item.subTotal;
        return {
          ...state, //hard copy the state
          basket: newBasket,
        };
      } else
        return {
          ...state, //hard copy the state
          basket: [...state.basket, action.item], //append the new item as per action
        };
    }
    case "INC_TO_BASKET": {
        console.log("HandleInc Action", action);
        const index = state.basket.findIndex(
          (basketItem) => basketItem.id === action.item.id
        );
        let newBasket = [...state.basket];
        if (index >= 0) {
          //do magic
  
          newBasket[index].quantity += 1;
          newBasket[index].subTotal += newBasket[index].price;
        }
        else {
            console.warn(`Product (id: ${action.id}): not in basket`);
          }
          return {
            ...state, //hard copy the state
            basket: newBasket,
          };
        }
    case "REDUCE_FROM_BASKET": {
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        //do magic
        newBasket[index].quantity -= 1;
        newBasket[index].subTotal -= newBasket[index].price;
           if(newBasket[index].quantity===0){newBasket.splice(index,1)}
      } else {
        console.warn(`Product (id: ${action.id}): not in basket`);
      }
      return {
        ...state, //hard copy the state
        basket: newBasket,
      };
    }

    case "REMOVE_FROM_BASKET": {
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(`Product (id: ${action.id}): not in basket`);
      }
      return {
        ...state,
        basket: newBasket,
      };
    }
    default:
      return state;
  }
};

export default reducer;
