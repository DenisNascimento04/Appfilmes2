import React from 'react';
import { View, Text } from 'react-native';
import { Img, Press, Texto, ViewBlur } from './styles';
// import { Container } from './styles';
type Props = {
    nome: string,
    thamb: string
}

export function Category(props: Props) {
  return (
    <Press>
        <Img source={{ uri: props.thamb }} />
        <ViewBlur>
            <Texto># {props.nome}</Texto>
        </ViewBlur>
    </Press>
  );
}