import React from 'react';
import './style.scss';
import '../MoneyInput/style.scss';

interface IShowPayProps {
    netShow: number;
    ndflShow: number;
    grossShow: number;
}
export const ShowPay = (data: IShowPayProps) => {
    const { netShow, ndflShow, grossShow } = data;
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-3 show-pay">
                    <div className="d-flex flex-row">
                        <p><span className="rub">{netShow.toLocaleString()} i</span> сотрудник будет получать на руки</p>
                    </div>
                    <div className="d-flex flex-row">
                        <p><span className="rub">{ndflShow.toLocaleString()} i</span> НДФЛ, 13% от оклада</p>    
                    </div>
                    <div className="d-flex flex-row">
                        <p><span className="rub">{grossShow.toLocaleString()} i</span> за сотрудника в месяц</p>   
                    </div>
                </div>
            </div>
        </div>
    )
}