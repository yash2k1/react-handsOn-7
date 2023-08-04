import './StudentStyle.css'
import {  useNavigate, Link } from 'react-router-dom'
import { useSelector } from "react-redux";

const Students =()=> {                                                      
  const data=useSelector((state)=>state.StudentData.data)
  console.log(data)
  const navigate=useNavigate()
  const ToForm=()=>{
    navigate('/form',{state:{id:data.length}})
  }
  
  return (
    <>
    <header>
      <div className="stud">Sudents Details</div>
      <button onClick={ToForm} className="add">Add new Students</button>
    </header>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Course</th>
          <th>Batch</th>
          <th>Change</th>
        </tr>
      </thead>
  
      {
        data.map((item,index)=>{
       return( <tr key={index}>
          <td>{item.Name}</td>
          <td>{item.Age}</td>
          <td>{item.Course}</td>
          <td>{item.Batch}</td>
          <td><Link to={'/form/'+index}>Edit</Link></td>
          </tr>)
        })
      }
    
 

    </table>
    </>
  )
}

export default Students