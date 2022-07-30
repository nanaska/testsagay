import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./slices/sliceCounter";
export default configureStore({
    reducer: {
        counter: counterReducer
    }
})