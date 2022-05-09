import { configureStore } from "@reduxjs/toolkit";
//import { useReducer } from "react";
import userReducer from "../features/userSlice";

export default configureStore (
    {
        reducer:{
            user: userReducer,
        },
    }
);