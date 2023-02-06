import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { useSelector } from 'react-redux';

import { ButtonInput, Container, MenuButton, Title } from "./styles";
import { propsDrawer, propsStack } from "../../routes/types";
import themes from "../../themes";
import { RootState } from "../../store";

type Props = {
    title: string
}

export function Header(props: Props) {

    const navigationDrawer = useNavigation<propsDrawer>();
    const navigationStack = useNavigation<propsStack>();
    const usuario = useSelector((state: RootState) => state.usuario)
    const [pesquisa, setPesquisa] = useState("");

    return(
        <Container>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <MenuButton onPress={() => navigationDrawer.openDrawer()}>
                    <Feather name="menu" size={24} color={themes.colors.CONTRASTE} />
                </MenuButton>
                <Title>{props.title}</Title>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <ButtonInput onPress={() => navigationStack.navigate('PageSearch')}>
                    <Feather name='search' size={24} color={themes.colors.CONTRASTE} />
                </ButtonInput>
                <Image 
                    source={{ uri: usuario.perfil }}
                    style={{ width: 24, height: 24 }}
                    borderRadius={8}
                />
            </View>

        </Container>
    );
}