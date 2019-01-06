import React, {Component} from 'react';
import {View, Text, TouchableHighlight, FlatList } from 'react-native';
import players from '../assets/players.json';

class List extends Component {
    constructor(props){
    super(props)
    this.renderItem = this.renderItem.bind(this);
    }

    static navigationOptions = {
        title: 'List',
        headerStyle: {
            backgroundColor: 'black'
            }
        }

    keyExtractor(item, index) {
        return `${index}`;
    }

    renderItem({item}) {
        const handlePress = () => {
        this.props.onItemPress(item);
        }
            return(
                <View>
                    <TouchableHighlight
                    onPress={handlePress}>
                        <Text>{item}</Text>
                    </TouchableHighlight>
                </View>
        )
    }

    render() {
        return (
            <FlatList
                data={this.props.players}
                renderItem={this.renderItem}
                keyExtractor={this.keyExtractor}
            />
        );
    }
}
export default List;