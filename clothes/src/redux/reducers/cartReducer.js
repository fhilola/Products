const initialState = {
    cart_products: []
}

const cartReducer = (state = initialState, action) => {
    const product_index = state.cart_products.findIndex(product => product.id === action.info.id)
    switch(action.type){
        case 'ADD_TO_CART':
            let newcart = state.cart_products
            if(product_index === -1 ){
                newcart = [...state.cart_products, action.info]
            }
            return {
                cart_products: newcart
            }
        default :
        return state
    }
}

export {cartReducer}