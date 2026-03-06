export const INITIAL_STATE = {
    res: "Please add an input"
}
export const reducer = (state, action) => {
    switch (action.type) {
        case "SUBMIT":
            if (action.res === '') {
                return {
                    res: "value should not be empty"
                }
            } else {
                if (action.res % 2 === 0) {
                    return { res: `${action.res} is an even number` }
                } else {
                    return { res: `${action.res} is an odd number` }
                }
            }
            break;
        default:
            return null
    }
}