import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";

const Routes = () => {

    const signed = false;
    const loading = false;

    if(loading) {
        return(
            <View style={{flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'red'}}>
            <ActivityIndicator  size={50} color={'blue'}/>
        </View>
        )
    }
    return(
       signed ? <AppRoutes/> : <AuthRoutes/>
    )
}


export {Routes};