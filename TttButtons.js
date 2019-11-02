import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


const TttButtons = props => {
    const { button, onTap } = props

    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <View style={styles.row1}>
                {button.slice(0, 3).map((item) => <TouchableOpacity disabled={item.disabled} key={item.id} onPress={() => onTap(item)} style={styles.button}>
                    <Text style={styles.text}>{item.text}</Text>
                </TouchableOpacity>)}
            </View>
            <View style={styles.row2}>
                {button.slice(3, 6).map((item) => <TouchableOpacity disabled={item.disabled} key={item.id} onPress={() => onTap(item)} style={styles.button}>
                    <Text style={styles.text}>{item.text}</Text>
                </TouchableOpacity>)}
            </View>
            <View style={styles.row3}>
                {button.slice(6, 9).map((item) => <TouchableOpacity disabled={item.disabled} key={item.id} onPress={() => onTap(item)} style={styles.button}>
                    <Text style={styles.text}>{item.text}</Text>
                </TouchableOpacity>)}
            </View>

        </View>
    )
};

const styles = StyleSheet.create({
    row1: {

        flexDirection: 'row',
        paddingTop: 20
    },
    row2: {

        flexDirection: 'row',
    },
    row3: {

        flexDirection: 'row',
        paddingBottom: 50
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'skyblue',
        borderColor: 'black',
        borderWidth: 1,
        width: 110,
        height: 110
    },
    text: {

        fontSize: 50
    }

});
export default TttButtons;














