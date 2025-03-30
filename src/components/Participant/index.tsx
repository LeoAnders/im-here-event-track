import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { styles } from './styles'

export function Participant() {
  function handleparticipantDelete() {
  }

  return (
    <View style={styles.container} >
      <Text style={styles.name}>Leonardo</Text>

      <TouchableOpacity style={styles.button} onPress={handleparticipantDelete}>
        <Text style={styles.buttonText}> - </Text>
      </TouchableOpacity>
    </View >
  )
}