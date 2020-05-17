export default function domains(state = [], action) {
  switch (action.type) {
    case "ADD_DOMAIN":
      console.log('ENTROU NO DOMAIN REDUCER')
      let index = state.findIndex(e => e.name == action.payload.name);
      if (index == -1){
        return [ {
          name: action.payload.name,
          isFavorite: false
        }, ...state];
      }
      return state;

    case "RESET_DOMAIN":
      console.log('ENTROU NO RESET_DOMAIN REDUCER')
      return []
    default:
      return state;
  }
}