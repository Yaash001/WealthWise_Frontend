import React from 'react';
import {Link} from 'react-router-dom';
import './Navig.css';
function Navig() {
    return (
<nav>
    <h1>WealthWise</h1>
    <div>
      <Link to='/Login'>LOGIN</Link>
    
        <Link to='/Signup'>SIGNUP</Link>
        
        <Link to='/Home'>Home</Link>
        
       {/* <a href='/Signp'>SIGNUP</a>
        <a href='/Login'>LOGIN</a>
        <a href='/About'>ABOUT</a>*/}
    </div>
</nav>

    );   
  };
  export default Navig;
  