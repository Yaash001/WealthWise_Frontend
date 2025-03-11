import React, { useState, useEffect } from 'react';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import Eye from './ShowPass';

export default function Login() {
  const [pass, setPass] = useState(false);
const [uid,setUid] = useState("");
const [password,setPassword] = useState("");

const handleSubmit = async(e) =>{
e.preventDefault();
try {
  const response = await fetch("login url of backend", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: uid, password }),
  });

  if (response.ok) {
    const data = await response.json();
    localStorage.setItem("accessToken", data.accessToken);
    localStorage.setItem("refreshToken", data.refreshToken);
    navigate("/dashboard");
  }
   else {
    alert("Login failed!");
  }
} catch (error) {
  console.error("Login error:", error);
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

              <label htmlFor="uid">Enter Uid:</label>
              <input type="text" id="uid" name="uid" required  
        onChange={(e) => setUid(e.target.value)} value = {uid}/>
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
              />
              <Eye toggleVisibility={() => setPass(!pass)} />
              </div>
              {/*<button
                className="pass"
                type="button"
                onClick={() => showPass(!pass)}
              >
                {pass ? 'Hide' : 'Show'}
              </button>*/}
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