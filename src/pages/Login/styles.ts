import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.FUNDO};
    padding-top: 24px;
`;
export const ButtonBack = styled.Pressable`
    margin-left: 16px;
`;
export const Content = styled.View`
    flex: 1;
    /* align-items: center; */
    justify-content: space-between;
    margin: 0 64px;
    padding: 64px 0;
    margin-bottom: 64px;
    /* background-color: green; */
`;
export const Titulo = styled.Text`
    color: ${({ theme }) => theme.colors.CONTRASTE};
    font-family: ${({ theme }) => theme.fonts._700};
    font-size: 32px;
    /* margin-left: 16px; */
`;

export const ViewInput = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    padding-bottom: 8px;
    margin-bottom: 24px;
    border-bottom-width: .5px;
`

export const Input = styled.TextInput`
    width: 100%;
    color: ${({ theme }) => theme.colors.CONTRASTE};
    font-family: ${({ theme }) => theme.fonts._700};
    font-size: 16px;
    margin-left: 16px;
`;
export const ButtonLogin = styled.Pressable`
    width: 100%;
    padding: 16px 0;
    background-color: ${({ theme }) => theme.colors.COMPLEMENTAR};
    align-items: center;
    margin-top: 16px;
    border-radius: 8px;
`;

export const Texto = styled.Text`
    color: ${({ theme }) => theme.colors.CONTRASTE};
    font-family: ${({ theme }) => theme.fonts._500};
    font-size: 24px;
    /* margin-left: 16px; */
`;
// export const Container = styled.View`

// `;
// export const Container = styled.View`

// `;
// export const Container = styled.View`

// `;
// export const Container = styled.View`

// `;
