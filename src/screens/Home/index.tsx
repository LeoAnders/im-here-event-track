import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { styles } from './styles'

export function Home() {
  function handleparticipantAdd() {
    console.log("Show de bola");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Terça-Feira, 02 de Setembro de 2025</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do Participante"
        />

        <TouchableOpacity style={styles.button} onPress={handleparticipantAdd}>
          <Text style={styles.buttonText}> + </Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}