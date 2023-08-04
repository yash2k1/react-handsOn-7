import { configureStore } from "@reduxjs/toolkit";
// import Student from "../Components/Students";
export default configureStore({
    reducer:{
        Student:StudentSlice,
    }
})