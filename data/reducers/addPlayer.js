let id = 0;

export default (currentState, action) => {

    id += 1;
    
    return {
        ...currentState,
        players: [...currentState.players,{
            name: action.payload
        }]
    }
}