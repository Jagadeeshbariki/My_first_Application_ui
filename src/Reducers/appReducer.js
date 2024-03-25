import { init } from "@/Utils/init"

export const appReducer =(state=init, action)=>{

        switch (action.type){
            case "AUTH":
                return {
                    ...state,
                    isLoggedIn:action.payload
                }
            case "LOADER":
                return {
                    ...state,
                    isShowLoader:action.payload
                }
            default:
                return state
        }

}