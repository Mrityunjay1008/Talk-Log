import { StyleSheet, Text, View } from "react-native"

const index = () => {
  return (
    <View 
      style={{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
      }}
    >
      <Text style={styles.myTitle}>Hello World</Text>
      <Text className="text-amber-800 text-2xl font-bold" >This is a Testing Paragraph.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  myTitle:{
    color:"purple",
    fontSize:32
  }
})

export default index
