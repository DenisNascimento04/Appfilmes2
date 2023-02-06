import { createSlice } from "@reduxjs/toolkit"

interface User {
    id: number,
    email: string,
    senha: string,
    nome: string,
    perfil: string,
    favoritos: any[],
    uid: string,
    state: boolean
}

const initialState: User = {
    id: 0,
    email: "",
    senha: "",
    nome: "",
    perfil: "https://www.fiscalti.com.br/wp-content/uploads/2021/02/default-user-image.png",
    favoritos: [],
    uid: "",
    state: false
}

export const usuario = createSlice({
    name: 'usuario-logado',
    initialState,
    reducers: {
        setLogin: (state, actions) => {
            state.id = actions.payload.id,
            state.uid = actions.payload.uid,
            state.email = actions.payload.email,
            state.senha = actions.payload.senha,
            state.nome = actions.payload.nome,
            state.perfil = actions.payload.perfil,
            state.favoritos = actions.payload.favoritos
        },
        resetUser: (state) => {
            state.id = 0,
            state.email = "",
            state.senha = "",
            state.nome = "",
            state.perfil = "https://www.fiscalti.com.br/wp-content/uploads/2021/02/default-user-image.png",
            state.favoritos = [],
            state.uid = ""
            state.state= false
        },
        setState: (state, actions) => {
            state.state = actions.payload
        },
        setFavoritos: (state, actions) => {
            state.favoritos.push(actions.payload);
        },
        // deleteFavoritos: (state, actions) => {
        //     state.favoritos.map((item, index) => {
        //         if (item === actions.payload) {
        //             state.favoritos.splice(index, index+1)
        //         }
        //     })
        // }
    }
})

export const { setLogin, setFavoritos, resetUser, setState } = usuario.actions
export default usuario.reducer;