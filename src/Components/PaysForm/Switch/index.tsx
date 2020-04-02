import React from 'react';
import { Field } from 'redux-form';
import './style.scss';

interface ISwitchProps {
    changeStatus: any;
    switchStatus: boolean;
}

export const Switch = (data: ISwitchProps) => {
    const { changeStatus, switchStatus } = data;
    console.log(switchStatus);
    return (
        <div className="d-flex flex-row switchForm">
            <span className={"custom-control-label-left" + (!switchStatus ? '  active' : ' disabled')}>Указать с НДФЛ</span>
            <label className="switch">
                <Field name="ndfl" component="input" type="checkbox" className="custom-control-input-custom" onChange={changeStatus}/>
                <div className="slider round"/>
            </label>
            <span className={"custom-control-label-right" + (switchStatus ? '  active' : ' disabled')}>Без НДФЛ</span>
        </div>
    )
}