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
    switchStatus: boolean;
}

export const View = (data: IVeiwProps) => {
    const {hasMrot, netShow, ndflShow, grossShow, changeNet, changeNdflStatus, switchStatus} = data;
    return (
        <form>
            <div className="d-flex flex-column fontForm">
                <h1>Сумма</h1>
                <div className="d-flex flex-column radioForm">
                    <div className="d-flex flex-row">
                        <label>
                            <Field name="chargeType" component="input" type="radio" value="salaryMonth"/>
                            <div/>
                        </label>
                        <span>Оклад за месяц</span>
                    </div>
                    <div className="d-flex flex-row">
                        <label>
                            <Field name="chargeType" component="input" type="radio" value="mrot"/>
                            <div/>
                        </label>
                        <span className="text">МРОТ</span>
                        <ToolTip />
                    </div>
                    <div className="d-flex flex-row">
                        <label>
                            <Field name="chargeType" component="input" type="radio" value="payDay"/>
                            <div/>
                        </label>
                        <span>Оплата за день</span>
                    </div>
                    <div className="d-flex flex-row">
                        <label>
                            <Field name="chargeType" component="input" type="radio" value="payHour"/>
                            <div/>
                        </label>
                        <span>Оплата за час</span>
                    </div>
                </div>
                {!(hasMrot==="mrot")? <Switch changeStatus={changeNdflStatus} switchStatus={switchStatus}/> : undefined}
                {!(hasMrot==="mrot")? <MoneyInput payType={hasMrot} changeNet={changeNet}/> : undefined}
                {(hasMrot==="salaryMonth")? <ShowPay netShow={netShow} ndflShow={ndflShow} grossShow={grossShow}/> : undefined}
            </div>
        </form>
    )
}