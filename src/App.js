import React,{useState, useEffect} from 'react'
import { View } from './components/View';

// getting the values of local storage
const getDatafromLS=()=>{
  const data = localStorage.getItem('employees');
  if(data){
    return JSON.parse(data);
  }
  else{
    return []
  }
}

export const App = () => {

  // main array of objects state || employees state || employees array of objects
  const [employees, setemployees]=useState(getDatafromLS());

  // input field states
  const [id, setId]=useState('');
  const [name, setName]=useState('');
  const [email, setEmail]=useState('');
  const [address, setAddress]=useState('');
  const [mobileno, setMobileno]=useState('');


  // form submit event
  const handleAddEmployeeSubmit=(e)=>{
    e.preventDefault();
    // creating an object
    let employee={
      id,
      name,
      email,
      address,
      mobileno,
      
    }
    setemployees([...employees,employee]);
    setId('');
    setName('');
    setEmail('');
    setAddress('');
    setMobileno('');
    setMobileno('');

    
  }

  // delete employee from LS
  const deleteEmployee=(id)=>{
    const filteredEmployees=employees.filter((element,index)=>{
      return element.id !== id
    })
    setemployees(filteredEmployees);
  }

  // saving data to local storage
  useEffect(()=>{
    localStorage.setItem('employees',JSON.stringify(employees));
  },[employees])

  return (
    <div className='wrapper'>
      <h1>Employee Details</h1>
      <div className='main'>

        <div className='form-container'>
          <form autoComplete="off" className='form-group'
          onSubmit={handleAddEmployeeSubmit}>
            <label>Id</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setId(e.target.value)} value={id}></input>
            <br></br>
            <label>Name</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setName(e.target.value)} value={name}></input>
            <br></br>
            <label>Mobileno</label>
            <input type="tel" name="number" pattern="[789][0-9]{9}" className='form-control' required
            onChange={(e)=>setMobileno(e.target.value)} value={mobileno}></input>
            <br></br>
            <label>Email</label>
            <input type="email" name="email" className='form-control' required
            onChange={(e)=>setEmail(e.target.value)} value={email}></input>
            <br></br>
            <label>Address</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setAddress(e.target.value)} value={address}></input>
            <br></br>
            <button type="submit" className='btn btn-success btn-md'>
              ADD
            </button>
          </form>
        </div>

        <div className='view-container'>
          {employees.length>0&&<>
            <div className='table-responsive'>
              <table className='table'>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobileno</th>
                    <th>Address</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <View employees={employees} deleteEmployee={deleteEmployee}/>
                </tbody>
              </table>
            </div>
            <button className='btn btn-danger btn-md'
            onClick={()=>setemployees([])}>Remove All</button>
          </>}
          {employees.length < 1 && <div>No employees are added yet</div>}
        </div>

      </div>
    </div>
  )
}

export default App
