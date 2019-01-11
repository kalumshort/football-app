export default ( currentState, action) => {
    return {
        ...currentState,
        players: state.players.filter(player => player.id !== action.id),
    };
}