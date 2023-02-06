import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    padding-top: 8px;
    background-color: ${( props ) =>  props.theme.colors.FUNDO};
`;

export const Cabecalho = styled.View`
    padding: 0 16px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
`;

export const ContainerInput = styled.View`
    max-height: 50px;
    background-color: #6E6E6E;
    flex-direction: row;
    border-radius: 10px;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    margin: 0 16px;
    margin-bottom: 16px;
`;
export const Input = styled.TextInput`
    width: 85%;
    /* padding: 0 12px; */
    font-size: 12px;
    color: ${( props ) =>  props.theme.colors.CONTRASTE};
    font-family: ${( props ) =>  props.theme.fonts._400};
`;
export const ButtonInput = styled.TouchableOpacity`
    width: 30px;
    height: 50px;
    align-items: center;
    justify-content: center;
`;

export const Texto = styled.Text`
    font-size: 14px;
    color: ${( props ) =>  props.theme.colors.CONTRASTE};
    font-family: ${( props ) =>  props.theme.fonts._400};
`;

export const CardSearch = styled.Pressable`
    height: 156px; 
    flex-direction: row; 
    background-color: #383034; 
    padding-left: 162px; 
    padding-right: 16px;
    margin-top: 70px;
`;
export const ButtonFiltro = styled.Pressable`
    margin-right: 12px;
    padding: 10px 12px;
    border-radius: 2px;
    /* font-size: 14px;
    color: ${( props ) =>  props.theme.colors.CONTRASTE};
    font-family: ${( props ) =>  props.theme.fonts._400}; */
`;


