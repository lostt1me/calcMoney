import { paysFormCalculate, IPaysFormState } from './payForm'
import { reducer as formReducer } from 'redux-form';
import { combineReducers } from  'redux';

export interface IAppState {
    form: any;
    payForm: IPaysFormState;
};

export const rootReducers = combineReducers<IAppState>({
    form: formReducer,
    payForm: paysFormCalculate
});