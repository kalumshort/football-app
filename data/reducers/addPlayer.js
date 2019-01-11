// setting the initail id value to 0
let id = 0;

export default (currentState, action) => {
// increasing the id by 1 every time this called
    id += 1;
    
    return {
        ...currentState,
        players: [...currentState.players,{
            name: action.payload,
            id: id
        }]
    }
}