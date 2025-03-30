import { Text, View, TextInput, TouchableOpacity, FlatList } from "react-native";
import { styles } from './styles'
import { Participant } from "@/src/components/Participant";

export function Home() {
  const participants = [
    {
      id: 1,
      name: 'Leonardo'
    },
    {
      id: 2,
      name: 'Jhon'
    },
    {
      id: 3,
      name: 'Gustavo'
    },
    {
      id: 4,
      name: 'Ricardo'
    },
  ]

  function handleParticipantAdd() {
  }

  function handleParticipantRemove() {
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

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}> + </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <Participant
            name={item.name}
            onRemove={handleParticipantRemove()}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptytext}>
            Ninguém chegou ainda? Adicione participantes a sua lista de presença.
          </Text>
        )}
      />
    </View>
  );
}