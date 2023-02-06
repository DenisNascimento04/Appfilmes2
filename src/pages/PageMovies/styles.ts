import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
// import Animated from 'react-native-reanimated';

export const Container = styled.View`
  
`;

export const Cabeca = styled.View`
    height: 550px;
    width: 100%;
    z-index: 1;
    justify-content: space-between;
    align-items: center;
`;
export const ImgBack = styled.Image`
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 0;
    width: 100%;
    height: 100%;
`;

export const Header = styled.View`
    flex-direction: row; 
    width: 100%; 
    justify-content: space-between; 
    padding: 0 16px; 
    padding-top: 32px;
`;

export const ButtonsHead = styled.Pressable`
    background-color: rgba(34, 31, 31, .7); 
    padding: 6px 6px; 
    border-radius: 6px;
`;

export const Play = styled.Pressable`
  background-color: rgba(34, 31, 31, .7); 
  width: 64px; 
  height: 64px; 
  border-radius: 64px; 
  align-items: center; 
  justify-content: center; 
  padding-left: 4px; 
  top: 90px;
`;

export const ViewMeta = styled.View`
    flex-direction: row; 
    width: 100%; 
    justify-content: space-around; 
    padding: 16px 0;
`;

export const Titulo = styled.Text`
    color: ${({ theme }) => theme.colors.CONTRASTE};
    font-family: ${({ theme }) => theme.fonts._700};
    font-size: 24px;
`;

export const SubTitulo = styled.Text`
    color: ${({ theme }) => theme.colors.CONTRASTE};
    font-family: ${({ theme }) => theme.fonts._500};
    font-size: 18px;
    border-left-width: 2px;
    border-color: ${({ theme }) => theme.colors.DESTAQUE};
    padding-left: 16px;
`;

export const TextoMeta = styled.Text`
    color: ${({ theme }) => theme.colors.CONTRASTE};
    font-family: ${({ theme }) => theme.fonts._500};
    font-size: 16px;
`;
export const Textos = styled.Text`
    color: ${({ theme }) => theme.colors.CONTRASTE};
    font-family: ${({ theme }) => theme.fonts._400};
    font-size: 14px;
    text-align: justify;
    line-height: 20px;
`;

export const Categorias = styled.Text`
    color: ${({ theme }) => theme.colors.CONTRASTE};
    font-family: ${({ theme }) => theme.fonts._400};
    font-size: 14px;
    margin-bottom: 8px;
    border-color: ${({ theme }) => theme.colors.CONTRASTE};
    border-width: 1px;
    border-radius: 4px;
    margin-right: 8px;
    padding: 4px 12px;
`;

export const Divisor = styled.View`
    margin: 0 8px;
    width: 4px; 
    height: 4px; 
    border-radius: 10px; 
    background-color: ${({ theme }) => theme.colors.CONTRASTE}12
`;