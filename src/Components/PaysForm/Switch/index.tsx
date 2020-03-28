import React from 'react';
import { Field } from 'redux-form';
import './style.scss';

interface ISwitchProps {
    changeStatus: any;
}

export const Switch = (data: ISwitchProps) => {
    const { changeStatus } = data;
    return (
        <div className="d-flex flex-row">
                    <div className="custom-control custom-switch">
                        <Field name="ndfl" component="input" type="checkbox" className="custom-control-input" id="ndflSwitch" onChange={changeStatus}/>
                        <label className="custom-control-label-left" htmlFor="ndflSwitch">Учитывать НДФЛ</label>
                        <label className="custom-control-label" htmlFor="ndflSwitch">Без НДФЛ</label>
                    </div>
        </div>
    )
}