import { configureStore } from "@reduxjs/toolkit"
import usersDataReducer from './usersDataSlice'
import regionReducer from './regionSlice'
import seedReducer from './seedSlice'
import errorNumberReducer from './errorNumberSlice'

export default configureStore({
    reducer: {
        usersData: usersDataReducer,
        region: regionReducer,
        seed: seedReducer,
        errorNumber: errorNumberReducer,
    } 
})