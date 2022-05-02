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
  const [fname, setFname]=useState('');
  const [lname, setLname]=useState('');
  const [email, setEmail]=useState('');
  const [address, setAddress]=useState('');
  const [age, setAge]=useState('');
  const [mobileno, setMobileno]=useState('');


  // form submit event
  const handleAddEmployeeSubmit=(e)=>{
    e.preventDefault();
    // creating an object
    let employee={
      id,
      fname,
      lname,
      email,
      address,
      age,
      mobileno,
      
    }
    setemployees([...employees,employee]);
    setId('');
    setFname('');
    setLname('');
    setEmail('');
    setAddress('');
    setAge('');
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
            <input type="number" className='form-control' required
            onChange={(e)=>setId(e.target.value)} value={id}></input>
            <label>FirstName</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setFname(e.target.value)} value={fname}></input>
             <label>LastName</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setLname(e.target.value)} value={lname}></input>
            <label>Mobileno</label>
            <input type="tel" name="number" pattern="[789][0-9]{9}" className='form-control' required
            onChange={(e)=>setMobileno(e.target.value)} value={mobileno}></input>
            <label>Email</label>
            <input type="email" name="email" className='form-control' required
            onChange={(e)=>setEmail(e.target.value)} value={email}></input>
            <label>Address</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setAddress(e.target.value)} value={address}></input>
            <label>Age</label>
            <input type="number" className='form-control' required
            onChange={(e)=>setAge(e.target.value)} value={age}></input>
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
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>Address</th>
                    <th>Age</th>
                    <th>Mobileno</th>
                    <th>Email</th>
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