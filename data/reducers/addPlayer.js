let id = 0;

export default (state, action) => {

    id += 1;
    
    return {
        ...state,
        players: [...state.players, {
            id: id,
            player: action.payload,
        }],
    }
}