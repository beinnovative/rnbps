import constants from "../constants"

const initial_state = {
    success: false,
    isLoggedIn: false,
    loading: false,
    user: {},
}

export default function auth(state = initial_state, action: any): any {
    switch (action.type) {
        case constants('auth').reducers.loading.load:
            return {   
                ...state,
                loading : true, 
            }
        case constants('auth').reducers.loading.unload:
            return {   
                ...state,
                loading : false, 
            }
        case constants('auth').reducers.login.success:
            return {
                ...state,
                loading : false,
                success: true,
                isLoggedIn : true,
                user: action.payload.data
            }
        case constants('auth').reducers.login.error:
            return {
                ...state,
                loading : false,
                success: false,
                isLoggedIn : false,
                data:{
                    message: action.payload.message
                }
            }
        default:
            return state
    }
}