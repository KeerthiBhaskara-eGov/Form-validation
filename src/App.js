import React,{useState, useEffect} from 'react'
import axios from 'axios';
export const App = () => {
  const [data, setData] = useState({
    empid:'',
    empfname: '',
    emplname:'',
    age:'',
    emailid: '',
    phoneNo:'',
    city:''
  });
  const val = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const submit = (e) => {
    e.preventDefault();
    console.log(data);
    const api = 'http://localhost:8080/employee';
    axios.post(api, { ...data });
  };

  const [ApiData, setForm] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8080/employee/`)
      .then((response) => {
        console.log(response.data);
        setForm(response.data);
      });
  }, []);
  return (
    <div className='wrapper'>
      <h1>Employee Details</h1>
      <div className='main'>
        <div className='form-container'>
          <form autoComplete="off" className='form-group'
          onSubmit={submit}>
            <label>ID</label>
            <input type="number" name="empid" className='form-control' required
            onChange={val}></input>
            <label>FirstName</label>
            <input type="text" name="empfname" className='form-control' required
            onChange={val}></input>
             <label>LastName</label>
            <input type="text" name="emplname" className='form-control' required
            onChange={val}></input>
            <label>Mobileno</label>
            <input type="tel" name="phoneNo" pattern="[789][0-9]{9}" className='form-control' required
            onChange={val}></input>
            <label>Email</label>
            <input type="email" name="emailid" className='form-control' required
            onChange={val}></input>
            <label>City</label>
            <input type="text" name="city" className='form-control' required
            onChange={val}></input>
            <label>Age</label>
            <input type="number" name="age" className='form-control' required
            onChange={val}></input>
            <br></br>
            <button type="submit" className='btn btn-success btn-md'>
              ADD
            </button>
          </form>
        </div>
        </div>
        <div className='view-container'>
        <div className='table-responsive'>
              <table className='table'>
                <thead>
        <tr>
        <th>ID</th>
          <th>FirstName</th>
          <th>LastName</th>
          <th>Age</th>
          <th>EmailID</th>
          <th>city</th>
          <th>phoneNo</th>
        </tr>
        </thead>
        
        {ApiData.map((data, key) => {
          return (
            <tr key={key}>
              <td>{data.empid}</td>
              <td>{data.empfname}</td>
              <td>{data.emplname}</td>
              <td>{data.age}</td>
              <td>{data.emailid}</td>
              <td>{data.city}</td>
              <td>{data.phoneNo}</td>
              
            </tr>
          );
        })}
      </table>
      </div> 
      </div>
    </div>
  )
}
export default App