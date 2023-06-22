import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    user : []
}
 export const UserSlice = createSlice({
    name:"userInfo",
    initialState,
    reducers:{
        setUser:(state,action) =>{
            state.user=[...state.user ,action.payload]

        },
        logOut:(state,action)=>{
            let users = state.user.filter((item)=>item.email !==action.payload)
            state.user=users
        }

    }
 })
 export const { setUser ,logOut } = UserSlice.actions

 export const getUser = (state)=>state.userInfo.user ;

 export default UserSlice.reducer