import {configureStore} from "@reduxjs/toolkit";
import logger from "redux-logger";
import { appReducer } from "@/Reducers/appReducer";

export const appStore = configureStore({
    reducer:{
        appReducer
    },
    middleware:()=>{
        return [logger]
    }

})