export const addBand = (name) => {
    return{
    type: 'ADD_BAND',
    name: Object.assign({}, name)
    }
}