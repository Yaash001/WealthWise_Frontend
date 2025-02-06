import React, { useState, useEffect } from 'react';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [pass, setPass] = useState(false);
const [uid,setUid] = useState("");
const [password,setPassword] = useState("");
{/*const navig = useNavigate();  //For Navigtion Prposre*/}

const handleSubmit = async(e) =>{
e.preventDefault();
{/*navig("/Dashboard");*/}
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
          <form onSubmit={handleSubmit} class="demo">
            <div className="demo">

              <br />

              <label htmlFor="uid">Enter Uid:</label>
              <input type="text" id="uid" name="uid" required  
        onChange={(e) => setUid(e.target.value)} val = {uid}/>
            </div>

            <div className="demo">
              <label htmlFor="pass">Enter Password:</label>
              <input
                type={pass ? 'text' : 'password'}
                id="pass"
                name="pass"
                required
                onChange={(e)=>setPass(e.target.value)} val = {pass}
              />
              <button
                className="pass"
                type="button"
                onClick={() => showPass(!pass)}
              >
                {pass ? 'Hide' : 'Show'}
              </button>
            </div>
            Not Having Account?<a href="/signup">SignUp!!</a>
            <div class="demo">
              <Button txt="Login"/>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
