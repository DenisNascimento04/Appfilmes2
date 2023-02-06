import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: ${( props ) =>  props.theme.colors.COMPLEMENTAR};
`;
export const Header = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 12px;
    margin-bottom: 8px;
    background-color: ${( props ) =>  props.theme.colors.COMPLEMENTAR};
`;
export const Texto = styled.Text`
    font-size: 14px;
    max-width: 200px;
    font-family: ${( props ) =>  props.theme.fonts._400};
    color: ${( props ) =>  props.theme.colors.CONTRASTE};
`;
// export const Header = styled.View`
//     flex-direction: row;
//     align-items: center;
//     padding: 12px;
//     background-color: ${( props ) =>  props.theme.colors.COMPLEMENTAR};
// `;
