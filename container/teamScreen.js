import React, {Component} from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, Text, TouchableHighlight, FlatList} from 'react-native';
import Teams from '../component/Teams';



const mapStateToProps = ( state ) => {
    return {
        players: state.players,
    }
};

// const mapDispatchToProps = dispatch  => ({
//         handleDelete: data => {
//             dispatch(deletePlayer(data))
//     }
// });

export default connect(mapStateToProps, null)(Teams);