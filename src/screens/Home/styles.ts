import { Button, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    backgroundColor: '#131016'
  },
  eventName: {
    color: '#FDFCFE',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48
  },
  eventDate: {
    color: '#6B6B6B',
    fontSize: 16
  },
  input: {
    flex: 1,
    backgroundColor: '#1F1E25',
    color: '#FFF',
    height: 56,
    borderRadius: 5,
    fontSize: 16,
    padding: 8
  },
  button: {
    width: 56,
    height: 56,
    backgroundColor: '#28b830',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: "flex-start",
    marginLeft: 10
  },
  buttonText: {
    color: '#FFF',
    fontSize: 20
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 36,
    marginBottom: 42,
  }
});