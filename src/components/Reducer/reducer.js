export const initialState = {
    basket: [],
    user: null
};
//Selector
export const getBasketTotal = (basket) => {
     return (basket.reduce((amount,item) => item.price + amount, 0));
} 
export const getQuantity = (basket) =>{
    const count = {}
    for (let product of basket){
        if(!(product.id in count)){
            count[product.id] = 1;
        }
        else{
            count[product.id]+=1
        }
    }
    return count;
}
export const decQuantity = (quantity) => {
    return quantity-1;
}

const reducer = (state, action) => {
    console.log(action)
    switch(action.type) {
        case "ADD_TO_BASKET" : 
            return {
                ...state,       //hard copy the state 
                basket: [...state.basket, action.item],     //append the new item as per action
            }
        case "REMOVE_FROM_BASKET": 
                const index = state.basket.findIndex(
                    (basketItem) => basketItem.id === action.id
                );
                let newBasket = [...state.basket];
                if(index>=0){
                    newBasket.splice(index,1);
                } else {
                    console.warn(`Product (id: ${action.id}): not in basket`)
                }
                return {
                    ...state,
                    basket: newBasket
                }
        case "SET_USER": 
                return{
                    ...state, 
                    user: action.user
                }
        default:
            return state;
    }
}

export default reducer;