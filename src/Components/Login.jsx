import React, { useState, useEffect } from 'react';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import Eye from './ShowPass';

export default function Login() {
  const [pass, setPass] = useState(false);
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async(e) =>{
    e.preventDefault();
    try {
        const response = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("full responce", data);
        console.log("token", data.token);
        localStorage.setItem("accessToken", data.token);
        // localStorage.setItem("refreshToken", data.refreshToken);
        navigate("/dashbord");
      }
      else {
        const errorText = await response.text(); 
        alert("Login failed: " + errorText);
      }
    } 
    catch (error) {
      console.error("Login error:", error);
      alert("An error occurred while logging in.");
    }
  }

  const showPass = (value) => {
    setPass(value);
  };

  return (
    <div className="App">
      <div className="box">
        <div className="text-">
          <h4>Login</h4>
        </div>

        <div className="form-div">
          <form onSubmit={handleSubmit} className="demo">
            <div className="demo">
              <br />
              <label htmlFor="email">Enter Email:</label>
              <input
                type="text" 
                id="email"
                name="email"
                required
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>

            <div className="demo">     
              <label htmlFor="pass">Enter Password:</label>
              <div className="input">
              <input
                type={pass ? 'text' : 'password'}
                id="pass"
                name="pass"
                required
                onChange={(e)=>setPassword(e.target.value)} 
                value={password}
              />
              <Eye toggleVisibility={() => setPass(!pass)} />
             </div>
            </div>
            Not Having Account?<a href="/signup">SignUp!!</a>
            <div className="demo">
              <Button txt="Login"/>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

////////////////////////////////////////////////////////////////////////////////////
//This is code of jwt token sending with heder for authentication
/*

const token = localStorage.getItem("accessToken");

const response = await fetch("http://localhost:8080/api/secure", {
  method: "GET",
  headers: {
    "Authorization": `Bearer ${token}`
  }
});
*/