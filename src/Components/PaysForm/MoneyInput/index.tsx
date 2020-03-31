import React from 'react';
import { Field } from 'redux-form';
import { normalizeInput } from './normalizeInput';
import './style.scss';

interface IMoneySpan {
    [key: string]: string
}

const moneySpan: IMoneySpan = {
    salaryMonth: "",
    mrot: "",
    payDay: "в день",
    payHour: "в час"
}

interface IMoneyInputProps {
    payType: string;
    changeNet: () => Object;
}

export const MoneyInput = (data: IMoneyInputProps) => {
    const { payType, changeNet } = data;
    return (
        <div className="d-flex flex-row input-form">
            <Field name="money" type="text" className="input-field" component="input" onChange={changeNet} normalize={normalizeInput}/>
            <span className="rub">i</span>
            <span className="rub">{moneySpan[payType]}</span>
        </div>
    )
}