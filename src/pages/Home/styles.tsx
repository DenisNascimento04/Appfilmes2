import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.FUNDO};
`;

export const Content = styled.ScrollView`
    
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.CONTRASTE};
    font-family: ${({ theme }) => theme.fonts._700};
    font-size: 18px;
    margin-left: 16px; 
    margin-bottom: 4px;
`;

