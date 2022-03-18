import initState from "../initState";

const cartReducer = (state = initState, action) => {
    const {type, payload} = action;

    switch (type) {
      case "ADD_ITEM":
        // проверить, существует ли продукт
        const exist = state.find((el) => el.id === payload.id)
        if(exist) {
          // увеличить количество
          return state.map((el) => 
          el.id === payload.id ? {...el, qty: el.qty + 1} : el
          );
        } else {
          return [...state, {...payload, qty: 1}]
        }
      break;

      case "DELETE_ITEM":
        const exist1 = state.find((el) => el.id === payload.id);
        if(exist1.qty === 1) {
          return state.filter((el) => el.id !== exist1.id)
        } else {
          return state.map((el) => el.id === payload.id ? {...el, qty: el.qty -1} : el );
        }
      break;

      default:
        return state
    }
}

export default cartReducer
