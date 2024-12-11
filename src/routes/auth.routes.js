import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";


const Stack = createStackNavigator();

const AuthRoutes = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} optioons= {{headerShown : false}}/>
        </Stack.Navigator>
    )
}


export {AuthRoutes}