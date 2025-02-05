
import './SignUp.css';
import Navig from './Navig';
import Button from './Button';
import './Button.css'
function SignUp() {
    return (
        <div className="Form">
          <Navig />
<h4 className="Head">Signup</h4>

<div className="SignUp">
  <form className="SignUpForm">
    <h3>Family Information </h3>
    <label htmlFor="familyName">Enter Last/Family Name:</label>
    <input type="text" id="familyName" required />
<h3>User Information </h3>
    <label htmlFor="FName">Enter First Name:</label>
    <input type="text" id="FName" name="userName" required />
    <br />

    
    <label htmlFor="contact">Enter Contact Number:</label>
    <input type="text" id="number" name="number" required />
    <br />

    <label htmlFor="Email">Enter Email Id:</label>
    <input type="email" id="Email" name="email" required />
    <br />

    <label htmlFor="PassWord">Enter Password:</label>
    <input type="password" id="passWord" name="passWord" required />
    <br />

    <label htmlFor="RePass">Confirm Password:</label>
    <input type="password" id="RePass" name="passWord" required />
    <br />

    

    <Button txt="SIGNUP"/>
  </form>
</div>
</div>

       );
  }

  export default SignUp;
