import React, {Component} from 'react';
import { connect } from 'react-redux';
import NewPlayerInput from '../component/newPlayerInput';
import { addPlayer } from '../data/actions/state';

// class NewPlayer extends Component {
//     constructor(props){
//         super(props)
//     }

//     render(){
//         return(
//             <NewPlayerInput players={this.props.players}/>
//         )
//     }
// }

const mapStateToProps = ( state ) => {
    return {
        players: state.players,
    }
};

const mapDispatchToProps = ( dispatch ) => {
    return {
        handleSubmit: data => {
            dispatch(addPlayer(data))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(NewPlayerInput);


