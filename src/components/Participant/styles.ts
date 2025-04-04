import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#1F1E25',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  name: {
    flex: 1,
    color: '#FFF',
    fontSize: 16,
    marginLeft: 16,
  },
  button: {
    width: 56,
    height: 56,
    backgroundColor: '#E23C44',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: "flex-start",
  },
  buttonText: {
    color: '#FFF',
    fontSize: 20
  },
})