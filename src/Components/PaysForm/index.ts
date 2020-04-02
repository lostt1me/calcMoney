import { View } from './View';
import { reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import { calculateSum, calculateUpdateSwitch } from '../../Redux/Actions/index';

const mapDispatchToProps = (dispatch: any) => {
    return {
        changeNet: (e:any) => dispatch(calculateSum(Number(e.target.value.replace(/[^\d]/g, '')))),
        changeNdflStatus: () => dispatch(calculateUpdateSwitch())
    }
}

const selector = formValueSelector('PaysForm');
const ViewConnect = connect( (state: any) => ({
    hasMrot: selector(state, 'chargeType'),
    netShow: state.payForm.net,
    ndflShow: state.payForm.ndfl,
    grossShow: state.payForm.gross,
    switchStatus: selector(state, 'ndfl')
    }),
    mapDispatchToProps
)(View);

export const PaysForm = reduxForm({
    form: 'PaysForm',
    initialValues: {chargeType: 'salaryMonth', ndfl: true, money: "0"},
})(ViewConnect);
