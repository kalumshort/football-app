import React, {Component} from 'react';
import {View, Text, TouchableHighlight, FlatList, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
}


class List extends Component {
    constructor(props){
    super(props)
    this.renderItem = this.renderItem.bind(this);
    }

    static navigationOptions = {
        title: 'Teams',
        headerStyle:{
            backgroundColor: 'lime'
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
                <View style={styles.listItem}>
                    <TouchableHighlight  style={styles.listButton}>
                        <>
                            <Text style={styles.buttonText}>Name: {item.name}</Text>
                            {/* <Text style={styles.buttonText}>Rating: {item.rating}</Text> */}
                        </>
                    </TouchableHighlight>
                </View>
        )
    }

    render() {
        let randomArray = shuffle(this.props.players);

        return (
            <>
            <FlatList
                data= {randomArray}
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

    },
})