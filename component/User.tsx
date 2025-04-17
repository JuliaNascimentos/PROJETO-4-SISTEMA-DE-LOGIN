import { Text, StyleSheet, Image, View, Pressable } from 'react-native'

export default function User({onLogout}) {
  return (
    <View style={styles.center}>
      <Image source={require('../assets/userSigma.jpg')} style={styles.imageUser} />
      <Text style={styles.welcomeText}>Bem vindo Jovêncio</Text>
      <Text style={styles.userInfo}>Seu nome completo: Jovêncio Rodrigues Pereira Neto</Text>
      <Text style={styles.userInfo}>Sua data de aniversário: 07/04</Text>
      <Text style={styles.userInfo}>Seu email: jovencio.neto@aluno.ce.gov.br</Text>
      <Pressable style={styles.goBack}  onPress={onLogout} ><Text style={styles.textGoBack} >Voltar</Text></Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageUser: {
    width: 100,
    height: 100,
    borderRadius: 50, 
    marginBottom: 20,
    marginTop: 100
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  userInfo: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: 'center', 
  },
  goBack:{
    backgroundColor:'#4162b7',
    width: '90%',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  textGoBack:{
    color: 'white',
    textAlign: 'center',
    fontSize: 15,
  },
})