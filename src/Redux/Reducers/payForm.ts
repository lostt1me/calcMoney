import { ACTIONS } from '../Actions/action-types';
import { IPaysFormAction } from '../Actions/index';

export interface IPaysFormState {
    net: number;
    ndfl: number;
    gross: number;
}

const initialState: IPaysFormState = {
    net: 0,
    ndfl: 0,
    gross: 0    
}

export const paysFormCalculate = (state = initialState, action: IPaysFormAction) => {
    switch (action.type) {
        case ACTIONS.SHOWMONEY:
            return {
                ...state,
                net: action.payload.net,
                ndfl: action.payload.ndfl,
                gross: action.payload.gross
                
            }
        default:
            return state;
    }
}