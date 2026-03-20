
export const matchPairReducer = (state, action)=>{
    switch(action.type){
        case "DISABLE":
            return {
                ...state,
                visitedArr:[...state?.visitedArr, ...action.visitedIconIds]
            }

            case "INCREASEMOVE":
                return {
                    ...state,
                    moves:state.moves+action.count
                }

                case "RESET":
                return {
                   ...action.obj
                }
            default:
                break;
    }
}