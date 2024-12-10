import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";


const Cadastro = () => {
    return(
        <View style={styles.container}>
            <Text>
                pagina login
            </Text>
            <TouchableOpacity>
            <Text>
                Feed
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
  

export {Cadastro};