const reducer = (state, action) => {
    switch (action.type) {
        case 'add_favourites':
            return [...new Set([...state, action.info])]
        default:
            return state
    }
}
export default reducer