import React from 'react';
import { Field } from 'redux-form';
import { Switch } from './Switch/index';
import { MoneyInput } from './MoneyInput/index';
import { ShowPay } from './ShowPay/index';
import { ToolTip } from './tooltip/index';
import './font/css/open-iconic-bootstrap.scss';
import './MoneyInput/style.scss';
import './style.scss';

interface IVeiwProps {
    hasMrot: any;
    netShow: number;
    ndflShow: number;
    grossShow: number;
    changeNet: any;
    changeNdflStatus: any;   
}

export const View = (data: IVeiwProps) => {
    const {hasMrot, netShow, ndflShow, grossShow, changeNet, changeNdflStatus} = data;
    return (
        <form>
            <div className="d-flex flex-column fontForm">
                <h1>Сумма</h1>
                <div className="d-flex flex-column radioForm">
                    <label><Field name="chargeType" component="input" type="radio" value="salaryMonth"/>Оклад за месяц</label>
                    <div className="d-flex flex-row">
                        <label><Field name="chargeType" component="input" type="radio" value="mrot"/>МРОТ</label>
                        <ToolTip />
                    </div>
                    <label><Field name="chargeType" component="input" type="radio" value="payDay"/>Оплата за день</label>
                    <label><Field name="chargeType" component="input" type="radio" value="payHour"/>Оклад за час</label>
                </div>
                {!(hasMrot==="mrot")? <Switch changeStatus={changeNdflStatus}/> : undefined}
                {!(hasMrot==="mrot")? <MoneyInput payType={hasMrot} changeNet={changeNet}/> : undefined}
                {(hasMrot==="salaryMonth")? <ShowPay netShow={netShow} ndflShow={ndflShow} grossShow={grossShow}/> : undefined}
            </div>
        </form>
    )
}