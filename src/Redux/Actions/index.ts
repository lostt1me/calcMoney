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
                net: Number(pay) * 0.87,
                ndfl: Number(pay) * 0.13,
                gross: Number(pay)
            }
        });
    } else {
        return dispatch({
            type: ACTIONS.SHOWMONEY,
            payload: {
                net: Number(pay),
                ndfl: Number(pay) * 0.13,
                gross: Number(pay) * 1.13
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
                net: Number(pay) * 0.87,
                ndfl: Number(pay) * 0.13,
                gross: Number(pay)
            }
        });
    } else {
        return dispatch({
            type: ACTIONS.SHOWMONEY,
            payload: {
                net: Number(pay),
                ndfl: Number(pay) * 0.13,
                gross: Number(pay) * 1.13
            }
        });
    }
}
