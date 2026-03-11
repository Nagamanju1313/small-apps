
const mortgageReducer = (state, action)=>{
    switch(action.type){
        case"CHANGE":
            return {
                ...state,
                ...action.payload
            }

            case "SUBMIT":
                let obj = {
                    ...state,
                    errors:{}
                }

                if(state.amount === '' || !Number(state.amount)){
                    obj.errors.amountErr="Amount Must be supplied"
                }

                if(state.tenure === '' || !Number(state.tenure)){
                    obj.errors.tenuresErr="Tenure Must be supplied"
                }
                if(state.intrest === '' || !Number(state.intrest)){
                    obj.errors.intrestErr="Intrest Percentage Must be supplied"
                }

                if(Object.keys(obj.errors).length == 0){
                    const r = state.intrest / 12 / 100; // monthly interest
                    const n = state.tenure * 12; // months

                    
                    let monthlyPayment = Math.round((state.amount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1));
                    obj.res="Monthly Emis is Rs."+monthlyPayment;
                }
                return obj;

                case"RESET":
                    return{
                        ...action.payload
                    }
            default:
                return null
    }
}
export default mortgageReducer;