import {configureStore} from "@reduxjs/toolkit"
import userSlice from "../Slice/userSlice"

const store =configureStore({
    reducer:{
        userInfo:userSlice,
      
    }
})

export default store