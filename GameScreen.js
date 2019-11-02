import React, { useState } from 'react'
import { View, Image, Text, StyleSheet, Button } from 'react-native'
import ttt from '../constants/ttt';
import TttButtons from '../components/TttButtons';
import { TouchableOpacity } from 'react-native-gesture-handler';





export default GameScreen = props => {

    const [player, setPlayer] = useState("PLAYER1 'X'")
    const [button, setButton] = useState(ttt)


    const changeStuff = (item) => {
        if (player === "PLAYER1 'X'") {
            temp = button;
            temp[item.id].text = ' X ';
            temp[item.id].disabled = true;
            setButton(temp)
            setPlayer("PLAYER2 'O'")
        }
        else if (player === "PLAYER2 'O'") {
            temp = button;
            temp[item.id].text = ' O ';
            temp[item.id].disabled = true;
            setButton(temp)
            setPlayer("PLAYER1 'X'")
        }
    }



    return (
        <View style={styles.home}>
            <View style={{ alignItems: 'center' }}>
                <Text style={styles.text}>{player}</Text>
            </View>

            <TttButtons button={button} onTap={changeStuff} />

            <View style={{ alignItems: 'center', paddingBottom: 50 }}>
                <TouchableOpacity style={styles.button} onPress={() => { setButton(ttt), setPlayer("PLAYER1 'X'") }}>
                    <Text style={styles.text2} > Play Again! </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}




GameScreen.navigationOptions = {
    headerTitle: 'Play Time',
    headerStyle: {
        backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
    },
};

const styles = StyleSheet.create({
    home: {
        flex: 1,
    },
    text: {

        paddingTop: 20,
        fontSize: 25,
    },
    button: {
        width: 150,
        height: 35,
        backgroundColor: 'green',
        borderColor: 'black',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text2: {
        fontSize: 20,
        color: 'white'
    }
})







