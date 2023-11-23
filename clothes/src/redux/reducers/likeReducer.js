const initialState = {
    liked_products: []
}
const likeReducer = (state=initialState, action)=>{
    switch(action.type){
        case 'ADD_TO_LIKE':
            return {
                liked_products: [...state.liked_products, action.info]
            }
        default:
            return state
    }
}
export {likeReducer}