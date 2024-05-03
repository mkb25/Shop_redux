import { ActionTypes } from "../Types/ActionTypes";

const initialState = {
  cart: [],
  quant: 0,
  TotalSum: 0,
};

const ProdReducer = (state = initialState, action) => {
 
  switch (action.type) {
    case ActionTypes.add_prod:
      const exists = state.cart.find((prod) => prod.id === action.payload.id);
      if (exists) {
        return {
          ...state,
          cart: state.cart.map((prod) =>
            prod.id === action.payload.id
              ? { ...prod, quant: prod.quant + 1 }
              : prod
          ),
          quant: state.quant + 1,
          TotalSum: state.TotalSum + action.payload.price,
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quant: 1, Sum: action.payload.price }],
          quant: state.quant + 1,
          TotalSum: state.TotalSum + action.payload.price,
        };
      }
    case ActionTypes.remove_prod:
      return {
        ...state,
        cart: state.cart.filter((prod) => prod.id !== action.payload.id),
        quant: state.quant - action.payload.quant,
        TotalSum: state.TotalSum - action.payload.Sum,
      };
    case ActionTypes.inc_qunat:
      return {
        ...state,
        cart: state.cart.map((prod) =>
          prod.id === action.payload.id
            ? { ...prod, quant: prod.quant + 1, Sum: prod.Sum + action.payload.price }
            : prod
        ),
        quant: state.quant + 1,
        TotalSum: state.TotalSum + action.payload.price,
      };
    case ActionTypes.dec_quant:
      return {
        ...state,
        cart: state.cart.map((prod) => {
          if (prod.id === action.payload.id) {
            const newQuant = prod.quant - 1;
            if (newQuant === 0) {
              // Call remove_prod if quantity reaches 0
              return {
                ...state,
        cart: state.cart.filter((prod) => prod.id !== action.payload.id),
        quant: state.quant - action.payload.quant,
        TotalSum: state.TotalSum - action.payload.Sum,
              }
            } else {
              return { ...prod, quant: newQuant, Sum: prod.Sum - action.payload.price };
            }
          } else {
            return prod;
          }
        }),
        // Update quant and TotalSum only if the quantity wasn't reduced to 0 (handled in the map)
        quant: state.quant > 0 ? state.quant - 1 : state.quant,
        TotalSum: state.TotalSum > 0 ? state.TotalSum - action.payload.price : state.TotalSum,
      };
    default:
      return state;
  }
};

export default ProdReducer;
