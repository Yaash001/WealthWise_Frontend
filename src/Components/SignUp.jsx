import './SignUp.css';
import Navig from './Navig';
import Button from './Button';
import Eye from './ShowPass';
import './Button.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
  const [pass, setPass] = useState(false);
  const [compass, setcomPass] = useState(false);

  const [formData, setData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    passWord: "",
    RePass: "",
    familyName: ""
  });

  const handleChange = (e) => {
    setData({ ...formData, [e.target.name]: e.target.value });
  };

  async function handleSubmit(e) {
    e.preventDefault();

    if (formData.passWord !== formData.RePass) {
      alert("BOTH PASSWORDS ARE NOT SAME...");
      return;
    }

    if (!/^\d{10}$/.test(formData.contactNumber)) {
      alert("Enter a valid 10-digit contact number.");
      return;
    }

    const { RePass, ...dataToSend } = formData;

    try {
      const response = await fetch("http://localhost:8080/user/Usersignup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToSend),
      });

      if (!response.ok) {
        throw new Error("Server error: " + response.status);
      }

      const data = await response.json();
      console.log("Response:", data);
    } catch (error) {
      console.error("Submission failed:", error.message);
      alert("Something went wrong. Please try again.");
    }
  }

  return (
    <div className="Form">
      <div className="SignUp">
        <form className="SignUpForm" onSubmit={handleSubmit}>
          <h3>User Information</h3>

          <label htmlFor="firstName">Enter First Name:</label>
          <input autoComplete="given-name" type="text" id="firstName" name="firstName" onChange={handleChange} required />

          <label htmlFor="middleName">Enter Middle Name:</label>
          <input type="text" id="middleName" name="middleName" onChange={handleChange} required />

          <label htmlFor="lastName">Enter Last Name:</label>
          <input autoComplete="family-name" type="text" id="lastName" name="lastName" onChange={handleChange} required />

          <label htmlFor="Email">Enter Email Id:</label>
          <input autoComplete="email" type="email" id="Email" name="email" onChange={handleChange} required />

          <label htmlFor="contact">Enter Contact Number:</label>
          <input autoComplete="tel" type="text" id="contactNumber" name="contactNumber" onChange={handleChange} required />

          <label htmlFor="PassWord">Enter Password:</label>
          <div className='pass-f'>
            <div className="ip">
              <input type={pass ? "text" : "password"} id="passWord" name="passWord" autoComplete="new-password" onChange={handleChange} required />
              <Eye toggleVisibility={() => setPass(!pass)} />
            </div>
          </div>

          <label htmlFor="RePass">Confirm Password:</label>
          <div className='pass-f'>
            <div className="ip">
              <input type={compass ? "text" : "password"} id="RePass" name="RePass" autoComplete="new-password" onChange={handleChange} required />
              <Eye toggleVisibility={() => setcomPass(!compass)} />
            </div>
          </div>

          <h3>Family Information</h3>
          <label htmlFor="familyName">Enter Family Name:</label>
          <input type="text" id="familyName" name="familyName" onChange={handleChange} required />

          Already Having An Account? <Link to="/login">Login!!</Link>
          <br /><br />

          <Button txt="SIGNUP" />
        </form>
      </div>
    </div>
  );
}

export default SignUp;
