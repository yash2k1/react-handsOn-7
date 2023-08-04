import { createSlice } from "@reduxjs/toolkit";
import StoreData from "../Components/StoreData"
const StudentSlice=createSlice({
    name:'StudentData',
    initialState:{data:StoreData},
      
     reducers:{
       AddStudent:(state,action)=>{
        state.data.push(action.payload);
       },
       EditStudent:(state,action)=>{
       state.data[action.payload.id].Name=action.payload.Name;
       state.data[action.payload.id].Age=action.payload.Age;
       state.data[action.payload.id].Course=action.payload.Course;
       state.data[action.payload.id].Batch=action.payload.Batch;
       }
     }
})
export default StudentSlice.reducer
export const {AddStudent,EditStudent} = StudentSlice.actions
