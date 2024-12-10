import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";


const Login = () => {
    return(
        <View style={styles.container}>
            <Text>
                pagina login
            </Text>
            <TouchableOpacity>
            <Text>
                pagina cadastro
            </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'pink',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  

export {Login};