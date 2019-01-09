import React, {Component} from 'react';
import { connect } from 'react-redux';
import List from '../component/List';
import {Text} from 'react-native';
import { getPlayers } from '../data/actions/state.js';
import NewPlayerInput from '../component/newPlayerInput';
import { addPlayer } from '../data/actions/state';

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
        return(
            <>
            <NewPlayerInput/>
            <List
                players={this.props.players}
            />
            </>
        )
    }


}
// export default ListScreen;

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

const enhancer = connect(mapStateToProps, mapDispatchToProps);
const ListScreenConnected = enhancer(ListScreen);

// export default ListScreenConnected;

export default connect(mapStateToProps, mapDispatchToProps)(ListScreen);