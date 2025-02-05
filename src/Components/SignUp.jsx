
import './SignUp.css';
import Navig from './Navig';
import Button from './Button';
import Eye from './ShowPass';
import './Button.css'
import { useState } from 'react';

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

    const response = await fetch("Ithe backend url yeil", { method: "POST", headers: { "Content-Type": "application/json", }, body: JSON.stringify(formData), });

    const data = await response.json();
    console.log("Response:", data);
  }

    return (
        <div className="Form">
          <Navig />
<h4 className="Head">Signup</h4>

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

    <Button txt="SIGNUP"/>
  </form>
</div>
</div>

       );
  }

  export default SignUp;
