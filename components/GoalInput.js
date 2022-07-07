import { StyleSheet, View, Button, TextInput, Modal, Image } from "react-native";
import { useState } from "react";

const GoalInput = (props) => {
    const [enteredGoalText, setEnteredGoalText] = useState("");

    const goalInputHandler = (enteredText) => {
        setEnteredGoalText(enteredText);
      };

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoalText)
        setEnteredGoalText('');
    }

    return (
        <Modal visible={props.visible} animationType="slide">
          <View style={styles.inputContainer}>
            <Image source={require('../assets/Images/goal.png')} />
            <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
            />
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button title="Add Goal" onPress={addGoalHandler} color="#0a0338"/>
                </View>
               
               <View style={styles.button}>
                 <Button title="Cancel" onPress={props.onCancel} color="#0a0338" />     
                </View>
               
            </View>
           
      </View>  
        </Modal>
        
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 24,
        borderBottomWidth: 1,
        padding: 16,
        borderBottomColor: "#cccccc",
        backgroundColor: '#bf9fe3'
      },
      textInput: {
        borderWidth: 1,
        borderColor: "#cccccc",
        width: "90%",
        padding: 8,
        color: "white",
      },
      buttonContainer: {
        marginTop: 16,
        flexDirection: "row",
      },
      button: {
        width: '50%',
        marginHorizontal: 8,
      }
})

export default GoalInput;