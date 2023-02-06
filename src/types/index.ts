export type PropsCard = {
    data:{
        id: number,
        titulo: string,
        rating: string,
        capaV: string,
        capaH: string,
        tipos: string[],
        imagens: string[],
    }
}

export type PropsMovies = {
    id: number,
    titulo: string,
    rating: string,
    lancamento: string,
    meta: string,
    duracao: string,
    sinopse: string,
    capaV: string,
    capaH: string,
    equipe: {
        diretor: {
            nome: string, foto: string
        }[]
        elenco: {
            nome: string, personagem: string, foto: string
        }[]
    },
    tipos: string[],
    imagens: string[]
}