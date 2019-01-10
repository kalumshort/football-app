import React, {Component} from 'react';
import List from './listContainer';

import Input from './inputContainer.js';

class PlayerScreen extends Component {
    constructor(props){
        super(props);
    }
    static navigationOptions = {
        title: 'players',
        headerStyle:{
            backgroundColor: 'lightblue'
        }
    }

  
    render(){
        return(
            <>
            <Input/>
            <List/>
            </>
        )
    }
}
export default PlayerScreen;

// const mapStateToProps = ( state ) => {
//     return {
//         players: state.players,
//     }
// };

// // const mapDispatchToProps = dispatch  => ({
// //         handleSubmit: data => {
// //             dispatch(addPlayer(data))
// //     }
// // });

// // const enhancer = connect(mapStateToProps, mapDispatchToProps);
// // const ListScreenConnected = enhancer(ListScreen);

// // export default ListScreenConnected;

// export default connect(mapStateToProps, null)(ListScreen);