import { ActionTypes } from "../Types/ActionTypes";

export const AddProd = (prod) => {
    return {
        type: ActionTypes.add_prod,
        payload: prod
    }
}

export const RemoveProd = (prod) => {
    return {
        type: ActionTypes.remove_prod,
        payload: prod
    }
}
export const IncQuant = (prod) => {
    return {
        type: ActionTypes.inc_qunat,
        payload: prod
    }
}
export const DecQuant = (prod) => {
    return {
        type: ActionTypes.dec_quant,
        payload: prod
    }
}
