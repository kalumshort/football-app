export default (state, action) => {
    return {
        ...state,
        players: [...state.players, {
            name: action.input,
            rating: 3,
        }],
    }
}