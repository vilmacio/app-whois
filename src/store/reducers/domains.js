export default function domains(state = [], action) {
    switch (action.type) {
      case "ADD_DOMAIN":
        console.log('ENTROU NO DOMAIN REDUCER')
        let index = state.findIndex(e => e.name == action.payload.name);
        if (index == -1) {
          return [{
            name: action.payload.name,
            isFavorite: false
          }, ...state];
        }
        return state;
  
      case "RESET_DOMAIN":
        console.log('ENTROU NO RESET_DOMAIN REDUCER')
        return []
  
      case "FAVORITE":
        console.log('ENTROU NO FAVORITE REDUCER')
        const menosOQueEuQueroAlterar = state.filter(item => {
          return item.name !== action.payload.name
        })
        const apenasOQueEuQueroAlterar = state.filter(item => {
          return item.name === action.payload.name
        })
        apenasOQueEuQueroAlterar[0].isFavorite = action.payload.isFavorite
  
        const x = apenasOQueEuQueroAlterar[0]
  
        const newState = [x, ...menosOQueEuQueroAlterar]
  
        return newState
  
      default:
        return state;
    }
  }