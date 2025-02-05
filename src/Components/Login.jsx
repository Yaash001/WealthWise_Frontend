import React, { useState, useEffect } from 'react';
import './Button.class';

export default function Login() {
  const [pass, setPass] = useState(false);
const [uid,setUid] = useState("");

  const showPass = (value) => {
    setPass(value);
  };

  return (
    <div className="App">
      <marquee>This Is Demo page"LOGIN PAGE"</marquee>
      <div className="box">
        <div className="text-">
          <h4>Login/SignUp</h4>
        </div>
        <div className="form-div">
          <form action="" method="post" class="demo">
            <div class="demo">
              <br />
              <label for="UID">ENTER UID:</label>
              <input type="text" id="uid" name="UID" required  
        onChange={(e) => setUid(e.target.value)} />
            </div>
            <div class="demo">
              <label for="PassWord">ENTER Password:</label>
              <input
                type={pass ? 'text' : 'password'}
                id="pass"
                name="CODE"
                required
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
