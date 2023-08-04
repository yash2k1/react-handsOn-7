import { configureStore } from "@reduxjs/toolkit";
import StudentSlice from "../Feature/StudentSlice";
 export default configureStore({
reducer:{
    StudentData:StudentSlice,
}
})
