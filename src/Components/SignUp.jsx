
import './SignUp.css';
import Navig from './Navig';
import Button from './Button';
import Eye from './ShowPass';
import './Button.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
  const [pass,setPass] = useState(false);
  const [compass,setcomPass] = useState(false);

  const [formData,setData] = useState({
    familyName:"",
    firstName:"",
    number:"",
    email:"",
    passWord:"",
    RePass:""
  });

  const handleChange=(e)=>{
    setData({...formData,[e.target.name]:e.target.value});
  };
  async function handleSubmit(e) {
    e.preventDefault();
    if(formData.passWord !== formData.RePass){
      alert("BOTH PASSWORDS ARE NOT SAME...");
      return;
    }
    const { RePass, ...dataToSend } = formData; 

    const response = await fetch("http://localhost:8080/user/signup", { method: "POST", headers: { "Content-Type": "application/json", }, body: JSON.stringify(dataToSend), });


    if (!response.ok) {
      console.error("Server error:", response.status);
      return;
  }

  const data = await response.json().catch(() => {
      console.error("Invalid JSON response from backend");
  });
    
    console.log("Response:", data);
  
  }

    return (
        <div className="Form">
          <div className="signup-title">Signup</div>
<div className="SignUp">
  <form className="SignUpForm" onSubmit={handleSubmit}>
    <h3>Family Information </h3>
    <label htmlFor="familyName">Enter Last/Family Name:</label>
    <input type="text" id="familyName" name='familyName' onChange={handleChange}required />
<h3>User Information </h3>
    <label htmlFor="FName">Enter First Name:</label>
    <input type="text" id="firstName" name="firstName" onChange={handleChange} required />
    <br />

    
    <label htmlFor="contact">Enter Contact Number:</label>
    <input type="text" id="number" name="number" onChange={handleChange} required />
    <br />

    <label htmlFor="Email">Enter Email Id:</label>
    <input type="email" id="Email" name="email" onChange={handleChange} required />
    <br />

    <label htmlFor="PassWord">Enter Password:</label><div className='pass-f'>
    <input type={pass ? "text" : "password"} id="passWord" name="passWord" onChange={handleChange} required />
   <Eye toggleVisibility={()=> setPass(!pass)}/>
   </div>
    <br />

    <label htmlFor="RePass">Confirm Password:</label>
    <div className='pass-f'>
    <input type={compass ? "text" : "password"}  id="RePass" name="RePass" onChange={handleChange} required />
    <Eye toggleVisibility={()=> setcomPass(!compass)}/>
    </div>

    <br />
    Already Having A Account?{' '}
    <Link to="/login">Login!!</Link>
    <br/> <br/>

    <Button txt="SIGNUP"/>
  </form>
</div>
</div>

       );
      }

  export default SignUp;
