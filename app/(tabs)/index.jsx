import { View, Text,StyleSheet, ImageBackground, Pressable } from 'react-native'
import { Link } from 'expo-router'

import icedCoffeeImg from '@/assets/images/coffee.webp'


const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground 
      source={icedCoffeeImg}
      resizeMode= 'cover'
      style={styles.image}
      >
        <Text style={styles.title}>Coffee Shop</Text>

        <Link href="/contact"
        style={{marginHorizontal: "auto"}} asChild>
          <Pressable style={styles.button}> 
            <Text style={styles.buttonText}>Contact Us</Text> 
            </Pressable>
        </Link>

      </ImageBackground>
    </View>
  )
}

export default app

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image:{
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title:{
    fontSize: 42,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    marginBottom: 120,
  },
  link:{
    fontSize: 42,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    textDecorationLine: 'underline',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 4,
  },
  button:{
    height: 60,
    backgroundColor: 'rgba(0,0,0,0.75)',
    borderRadius: 20,
    justifyContent: 'center',
    padding: 6,
  },
  buttonText:{
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    padding: 4,
  },
  
})