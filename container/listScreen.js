import React, {Component} from 'react';
import { connect } from 'react-redux';
import List from '../component/List';
import {Text} from 'react-native';
import { getPlayers } from '../data/actions/state.js';

class ListScreen extends Component {
    constructor(props){
        super(props);
    }
    static navigationOptions = {
        title: 'players',
        headerStyle:{
            backgroundColor: 'lightblue'
        }
    }

    componentDidMount() {
        // this.props.getPlayers();
    }

    render(){
        // const players = this.props;
        return(
            <List
                players={this.props.players}
            />
            // <Text>{this.props.players[1]}</Text>
            // <Text>{this.props.players[1]}</Text>
        )
    }


}
// export default ListScreen;

const mapStateToProps = ( state ) => {
    return {
        players: state.players
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         getPlayers: () => {
//             dispatch(getPlayers());
//         }
//     }
// }

const enhancer = connect(mapStateToProps, null);
const ListScreenConnected = enhancer(ListScreen);

export default ListScreenConnected;