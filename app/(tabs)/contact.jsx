//rnfe for the react-native functional component snippet

import { View, Text, ImageBackground, StyleSheet } from 'react-native'


import coffeeSplash from '@/assets/images/coffee.webp'

const explore = () => {
  return (
    <View>
      <ImageBackground
      source={coffeeSplash}
      resizeMode= 'cover'
      style={styles.image}
      >
      <Text>Iced Tea</Text>
      </ImageBackground>
    </View>
  )
}

export default explore

const styles = StyleSheet.create({
  container:{
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
  text:{
    fontSize: 42,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  }
})