import React, {Component} from 'react';
import {View, Text, TouchableHighlight, FlatList, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';



class List extends Component {
    constructor(props){
    super(props)
    this.renderItem = this.renderItem.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    }

    keyExtractor(item, index) {
        return `${index}`;
    }

    handleDelete = () => {
        console.log('deleted');
        console.log(this.props.item.id);

        // this.props.handleDelete(this.props.item.id)

    }

    renderItem({item}) {
        const handlePress = () => {
        this.props.onItemPress(item);
        }
            return(
                <View style={styles.listItem}>
                    <TouchableHighlight  style={styles.listButton}>
                        <>
                            <Text style={styles.buttonText}>{item.name}</Text>
                            {/* <Text style={styles.buttonText}>Rating: {item.rating}</Text> */}
                            <Icon style={styles.icon} onPress={ this.handleDelete } name="close"></Icon>
                        </>
                    </TouchableHighlight>
                </View>
        )
    }

    render() {
        return (
            <>
            <FlatList
                data={this.props.players}
                renderItem={this.renderItem}
                keyExtractor={this.keyExtractor}
            />
            </>

        );
    }
}
export default List;

const styles = StyleSheet.create({
    listItem:{
        flex: 1,
        alignItems: 'center',
    },
    listButton:{
        flexDirection: 'row',
        padding: 10,
        backgroundColor: 'lightblue',
        width: 300,
        margin:5,
        justifyContent: 'space-between',
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 17,
        marginLeft: 21,
    },
    icon: {
        fontSize: 22,
        marginRight: 8,
    },
})