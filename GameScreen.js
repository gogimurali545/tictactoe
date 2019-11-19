import React, { useState, useEffect} from 'react'
import { View, Text, StyleSheet, Alert, ScrollView ,Button} from 'react-native'
import ttt from '../constants/ttt';
import TttButtons from '../components/TttButtons';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default GameScreen = props => {
    
    const t = ttt
    const [button, setButton] = useState(t)
    const [player, setPlayer] = useState("PLAYER1 'X'")
    

    const changeStuff = (item) => {
        if (player === "PLAYER1 'X'") {
            temp = button;
            temp[item.id].text = 'X';
            temp[item.id].disabled = true;
            setButton(temp)
            setPlayer("PLAYER2 'O'")
        }
        else if (player === "PLAYER2 'O'") {
            temp = button;
            temp[item.id].text = 'O';
            temp[item.id].disabled = true;
            setButton(temp)
            setPlayer("PLAYER1 'X'")
        }

       
        const disableAll = button.map((item) => item = { ...item, disabled: true })

        const r1 = [0, 1, 2].map((i) => button[i].text)
        const r2 = [3, 4, 5].map((i) => button[i].text)
        const r3 = [6, 7, 8].map((i) => button[i].text)
        const c1 = [0, 3, 6].map((i) => button[i].text)
        const c2 = [1, 4, 7].map((i) => button[i].text)
        const c3 = [2, 5, 8].map((i) => button[i].text)
        const d1 = [0, 4, 8].map((i) => button[i].text)
        const d2 = [2, 4, 6].map((i) => button[i].text)
        if ((r1.every((i) => i === 'X')) ||
            (r2.every((i) => i === 'X')) ||
            (r3.every((i) => i === 'X')) ||
            (c1.every((i) => i === 'X')) ||
            (c2.every((i) => i === 'X')) ||
            (c3.every((i) => i === 'X')) ||
            (d1.every((i) => i === 'X')) ||
            (d2.every((i) => i === 'X'))) { Alert.alert("GameOver!", "PLAYER1 'X' Won the Game"); setButton(disableAll) }
        else if ((r1.every((i) => i === 'O')) ||
            (r2.every((i) => i === 'O')) ||
            (r3.every((i) => i === 'O')) ||
            (c1.every((i) => i === 'O')) ||
            (c2.every((i) => i === 'O')) ||
            (c3.every((i) => i === 'O')) ||
            (d1.every((i) => i === 'O')) ||
            (d2.every((i) => i === 'O'))) { Alert.alert("GameOver!", "PLAYER2 'O' Won the Game"); setButton(disableAll) }
        else if (button.every((item) => item.disabled === true)) {
            Alert.alert("It's a Draw", 'Take Some Risks')
        }
    }
    const initial = t.map((item) => item = { ...item, text: '', disabled: false })
    const initialize = () => {
        setButton(initial)
        setPlayer("PLAYER1 'X'")
    }


    return (
        <ScrollView>
            <View style={styles.home}>
                <View style={{ alignItems: 'center' }}>
                    <Text style={styles.text}>{player}</Text>
                </View>

                <TttButtons button={button} onTap={changeStuff} />

                <View style={{ alignItems: 'center', paddingBottom: 110 }}>
                    <TouchableOpacity style={styles.button} onPress={initialize}>
                        <Text style={styles.text2} > Play Again! </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}



        


GameScreen.navigationOptions =({navigation}) => {
    return{
    headerTitle: 'Play Time',
    headerStyle: {
        backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
    },
    headerLeft: ()=>{ return(
       <Button title='Back' onPress={()=>{navigation.navigate('Welcome');setButton(initial)}}/>)
    },
    
}};

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







