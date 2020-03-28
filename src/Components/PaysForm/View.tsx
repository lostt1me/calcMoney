import React from 'react';
import { useState } from 'react';
import { Field } from 'redux-form';
import { Switch } from './Switch/index';
import { MoneyInput } from './MoneyInput/index';
import { ShowPay } from './ShowPay/index';
import './font/css/open-iconic-bootstrap.scss';
import './MoneyInput/style.scss';
import './style.scss';
import $ from 'jquery';

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
    $(function () {
        ($('[data-toggle="tooltip"]') as any).tooltip()
    })
    const [activeTooltip, setActiveTooltip] = useState(false);
    function onClickToolTip(): void {
        setActiveTooltip(true);
    }
    function onBlurToolTip(): void {
        setActiveTooltip(false);
    }
    return (
        <form>
            <div className="d-flex flex-column">
                <label>Сумма</label>
                <label><Field name="chargeType" component="input" type="radio" value="salaryMonth"/>Оклад за месяц</label>
                <div className="d-flex flex-row">
                    <label><Field name="chargeType" component="input" type="radio" value="mrot"/>МРОТ</label>
                    <button type="button" className="btn btn-round" data-toggle="tooltip" data-placement="right" title="Минимальный размер оплаты труда. Разный для разных регионов."
                     onClick={() => onClickToolTip()} onBlur={() => onBlurToolTip()}>
                        {activeTooltip? <span className="oi oi-x"></span> : <span className="oi oi-info"></span>}
                    </button>
                </div>
                <label><Field name="chargeType" component="input" type="radio" value="payDay"/>Оплата за день</label>
                <label><Field name="chargeType" component="input" type="radio" value="payHour"/>Оклад за час</label>
                {!(hasMrot==="mrot")? <Switch changeStatus={changeNdflStatus}/> : undefined}
                {!(hasMrot==="mrot")? <MoneyInput payType={hasMrot} changeNet={changeNet}/> : undefined}
                {(hasMrot==="salaryMonth")? <ShowPay netShow={netShow} ndflShow={ndflShow} grossShow={grossShow}/> : undefined}
            </div>
        </form>
    )
}