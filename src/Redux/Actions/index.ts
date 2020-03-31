import { ACTIONS } from './action-types'
import { Dispatch } from 'redux'

export interface IPaysFormAction {
    type: string;
    payload: {
        net: number;
        ndfl: number;
        gross: number;
    }
}

// getState return type is IStore
export const calculateSum = (pay: number) => (dispatch: Dispatch, getState: () => any) => {
    const state = getState();
    if(!state.form.PaysForm.values.ndfl){
        return dispatch({
            type: ACTIONS.SHOWMONEY,
            payload: {
                net: Math.round(Number(pay) * 0.87),
                ndfl: Math.round(Number(pay) * 0.13),
                gross: Number(pay)
            }
        });
    } else {
        let gross = Math.round(Number(pay) / 0.87)
        return dispatch({
            type: ACTIONS.SHOWMONEY,
            payload: {
                net: Number(pay),
                ndfl: Math.round(gross * 0.13),
                gross: gross
            }
        });
    }
}
export const calculateUpdateSwitch = () => (dispatch: Dispatch, getState: () => any) => {
    const state = getState();
    const pay: number = state.form.PaysForm.values.money;
    if(state.form.PaysForm.values.ndfl){
        return dispatch({
            type: ACTIONS.SHOWMONEY,
            payload: {
                net: Math.round(Number(pay) * 0.87),
                ndfl: Math.round(Number(pay) * 0.13),
                gross: Number(pay)
            }
        });
    } else {
        let gross = Math.round(Number(pay) / 0.87)
        return dispatch({
            type: ACTIONS.SHOWMONEY,
            payload: {
                net: Number(pay),
                ndfl: Math.round(gross * 0.13),
                gross: gross
            }
        });
    }
}
