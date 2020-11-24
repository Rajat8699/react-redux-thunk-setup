let defaultState={
    Login:[],
    Register:[],
    Forgot:[]
}

const auth=(state=defaultState,action)=>{
    if (action.type==="LOGIN") {
        return{
            ...state,
            Login:action.data
        }
    }
    
    else if (action.type==="REGISTER") {
        return{
            ...state,
            Register:action.data
        }
    }
    else if (action.type==="FORGOT_PASSWORD") {
        return{
            ...state,
            Forgot:action.data
        }
    }
    else{
        return{
            ...state
        }
    }
}
export default auth;