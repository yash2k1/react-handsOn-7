import React, {  useState } from 'react'
import "./FormStyle.css"
import {useDispatch, useSelector} from "react-redux";
import {  useLocation, useParams,useNavigate } from 'react-router-dom'
import { AddStudent,EditStudent } from '../Feature/StudentSlice';

const Form = () => {
  const dispatch=useDispatch()
  const data=useSelector((state)=>state.StudentData.data)


  const dynamicRouteId= useParams();
  const location=useLocation();
  const isEdit= dynamicRouteId?.studentId;//is this form is open by edit
  const isAdd= location?.state?.id;//is this form is open by edit
console.log(isAdd)

  const Id=( isEdit)? dynamicRouteId?.studentId:isAdd;

  const navigate=useNavigate()

  // // if (dynamicRouteId?.studentId) is true then prefilled value else empty string
  const [stdName,setStdName]=     useState((isEdit)?data[Id]?.Name  :"")
  const [stdAge,setStdAge]=       useState((isEdit)?data[Id]?.Age   :"")
  const [stdCourse,setStdCourse]= useState((isEdit)?data[Id]?.Course:"")
  const [stdBatch,setStdBatch]=   useState((isEdit)?data[Id]?.Batch :"")

    const handleClick=(e)=>{
    if(stdName!==""&&stdAge!==""&&stdCourse!==""&&stdBatch!==""){

      e.preventDefault();
 
//  if add
    isAdd&& dispatch(AddStudent({
     Name: stdName,
      Age:stdAge,
     Course: stdCourse,
      Batch:stdBatch, 
      }
    )
    )
   
    // if edit
    isEdit&& dispatch(EditStudent({
      Name: stdName,
      Age:stdAge,
     Course: stdCourse,
      Batch:stdBatch,
         id:Id,
      }))
      setStdName("")
      setStdAge("")
      setStdCourse("")
      setStdBatch("")

      navigate("/students")
    }else{
      alert('fill all fields')

    }
    }
  return (
    <div>
      <div className="formData">
        <div className='fields'>
         <input type='text' id='name' onChange={(e)=>{setStdName(e.target.value)}} value={stdName}  name='Name'  className="Name" required/>  
        <label htmlFor='name'>Name</label>
        </div>
      
      <div className='fields'>
        <input type='number' id='age'  onChange={(e)=>{setStdAge(e.target.value)}} value={stdAge}  name='Age' className="Age" required />
      <label htmlFor='age'>Age</label>
      </div>
       <div className='fields'>
        <input type='text' id='course' onChange={(e)=>{setStdCourse(e.target.value)}} value={stdCourse} name='Course' className="Course" required/>
       <label htmlFor='course'>Course</label>
       </div>
        <div className='fields'>
        <input type='text' id='batch' onChange={(e)=>{setStdBatch(e.target.value)}} value={stdBatch} name='Batch' className="Batch" required/> 
        <label htmlFor='batch'>batch</label>

        </div>
       
      </div>
      <div className="formBtns">
        <button onClick={()=> navigate("/students")} className="CancelBtn btn">Cancel</button>
        <button  onClick={handleClick} className="submitBtn btn">{dynamicRouteId?.studentId?'Update':'Submit'}</button>
        {/* <button   className="submitBtn btn">{dynamicRouteId?.studentId?'Update':'Submit'}</button> */}
      </div>

    </div>
  )
}

export default Form
