import data from '../database/data.json';

export const TopMeta = () => {
    var result = data.sort((a,b) => {
        return parseInt(b.meta) - parseInt(a.meta);
    })
    return result.slice(0,4)
}
export const TopRating = () => {
    var result = data.sort((a,b) => {
        return parseFloat(b.rating) - parseFloat(a.rating);
    })
    return result;
}