export default function history(state = [], action) {
    switch (action.type) {
      case "SAVE_HISTORY":
        console.log('ENTROU NO SAVE_HISTORY REDUCER')
        return [{
          id: action.payload.id,
          domain: action.payload.domain,
          moment: action.payload.moment
          },
            ...state];

      case "RESET_HISTORY":
        console.log('ENTROU NO RESET_HISTORY REDUCER')
        return []

      case "REMOVE_HISTORY_ITEM":
        const newState = state.filter(item => {
          return item.id !== action.payload.id
        })
        return newState

      default:
        return state;
    }
  }