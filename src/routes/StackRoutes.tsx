import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Easing } from 'react-native';
import { PropsStack } from "./types";

import Home from "../pages/Home";
import Movies from "../pages/Movies";
import { PageMovies } from "../pages/PageMovies";
import { PageSearch } from "../pages/PageSearch";
import { Login } from "../pages/Login";

const Stack = createNativeStackNavigator<PropsStack>();

export default function StackRoutes() {
    return(
        <Stack.Navigator
            screenOptions={{
                
            }}
        >
            <Stack.Group screenOptions={{ animation: 'slide_from_right' }}>
                <Stack.Screen 
                    name="Home" 
                    component={Home}
                    options={{ headerShown: false }}
                /> 
                <Stack.Screen 
                    name="PageSearch" 
                    component={PageSearch}
                    options={{ headerShown: false }}
                /> 
                <Stack.Screen 
                    name="Login" 
                    component={Login}
                    options={{ headerShown: false }}
                /> 
            </Stack.Group>
            <Stack.Group screenOptions={{ presentation: "modal", animation: 'slide_from_bottom' }}>
                <Stack.Screen 
                    name="PageMovies" 
                    component={PageMovies}
                    options={{ headerShown: false }}
                    
                /> 
            </Stack.Group>
        </Stack.Navigator>
    );
}