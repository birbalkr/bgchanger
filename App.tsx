import React, { useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';


function App(): React.JSX.Element {
  const [color,setColor]=useState("#fff");

  const generatecolor=()=>{
    const hexRange='0123456789abcdef'
    let color1="#"
    for (let i = 0; i < 6; i++) {
      color1 +=hexRange[Math.floor(Math.random()*16)]
      console.log(color1)
    }
    setColor(color1)
  }
  return (
    <>
    <StatusBar backgroundColor={color}/>
    <View style={[styles.container,{backgroundColor:color}]}>
      <TouchableOpacity onPress={generatecolor}>
        <View style={styles.actionbtn}>
          <Text style={styles.actionbtntext}>Press Me</Text>
        </View>
      </TouchableOpacity>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  actionbtn:{
    borderRadius:12,
    backgroundColor:'#6a1b4d',
    paddingVertical:10,
    paddingHorizontal:40
  },
  actionbtntext:{
    fontSize:24,
    color:"#fff",
    textTransform:'uppercase'
  }
});

export default App;
