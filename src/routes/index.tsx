import React, { useEffect } from "react";
import { Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Movies from "../pages/Movies";
import StackRoutes from "./StackRoutes";
import { PropsDrawer } from "./types";
import firebase from '../connect';
import themes from "../themes";
import { HeaderDrawer } from "../components/HeaderDrawer";
import { setLogin, usuario } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";


const Drawer = createDrawerNavigator<PropsDrawer>();

export default function Routes() {

    const dispatch = useDispatch();
    const usuarios = useSelector((state: RootState) => state.usuario)

    // useEffect(() => {
    //     firebase.auth().onAuthStateChanged(user => {
    //         firebase.firestore().collection('Usuarios').where('uid', '==', user?.uid)
    //         .get().then((query) => {
    //             query.forEach((data) => {
    //                 dispatch(setLogin({...data.data()}));
    //                 // dispatch(setIsLogin(true));
    //                 // setAutoLogin(true)
    //             })
    //         })
    //     })
    // },[])

    return(
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,

                drawerStyle: {
                    backgroundColor: themes.colors.FUNDO,
                    paddingTop: 20
                },

                drawerActiveBackgroundColor: themes.colors.COMPLEMENTAR,
                drawerActiveTintColor: themes.colors.CONTRASTE,
                drawerInactiveTintColor: themes.colors.CONTRASTE,
            }}
            drawerContent={props => <HeaderDrawer {...props} />}
        >   
            <Drawer.Screen 
                name="HomeDrawer" 
                component={StackRoutes} 
                options={{
                    title: "Home",
                    drawerIcon: ({ focused, size, color }) => (
                        <MaterialCommunityIcons 
                            name={focused ? "movie-open" : "movie-outline"}
                            size={size}
                            color={color} 
                        />
                    )
                }} 
            />
            <Drawer.Screen 
                name="Movies" 
                component={Movies} 
                options={{
                    title: "Meus Filmes",
                    drawerIcon: ({ focused, size, color }) => (
                        <MaterialCommunityIcons 
                            name={focused ? "archive" : "archive-outline"}
                            size={size}
                            color={color} 
                        />
                    )
                }} 
            />
        </Drawer.Navigator>
    );
}