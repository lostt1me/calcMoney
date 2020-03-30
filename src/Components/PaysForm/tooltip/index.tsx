import React from 'react';
import { useState } from 'react';
import './style.scss';
import $ from 'jquery';

export const ToolTip = () => {
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
    const infoCircle = (
        <svg className="bi bi-info-circle" width="1em" height="1em" viewBox="0 0 18 18" fill="grey" xmlns="http://www.w3.org/2000/svg" onClick={() => onClickToolTip()} data-toggle="tooltip">
            <path fillRule="evenodd" d="M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z" clipRule="evenodd"/>
            <path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588z"/>
            <circle cx="8" cy="4.5" r="1"/>
        </svg>
    );
    
    const xCricle = (
        <svg className="bi bi-x-circle" width="1em" height="1em" viewBox="0 0 18 18" fill="grey" xmlns="http://www.w3.org/2000/svg" onMouseLeave={() => onBlurToolTip()} data-toggle="tooltip">
            <path fillRule="evenodd" d="M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z" clipRule="evenodd"/>
            <path fillRule="evenodd" d="M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z" clipRule="evenodd"/>
            <path fillRule="evenodd" d="M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z" clipRule="evenodd"/>
        </svg>
    );

    return (
        <div>
            {activeTooltip? xCricle : infoCircle}
            <div className="tooltip bs-tooltip-top" role="tooltip">
                <div className="arrow"></div>
                <div className="tooltip-inner">
                    Some tooltip text!
                </div>
            </div>
        </div>
    )
}