import React from 'react';
import {Link} from 'react-router-dom';
import './Navig.css';
function Navig() {
    return (
<nav>
    <h1>WealthWise</h1>
    <div className="navbar">
    <Link to='/Home'>HOME</Link>

      <Link to='/Login'>LOGIN</Link>
    
        <Link to='/Signup'>SIGNUP</Link>
        
    </div>
</nav>

    );   
  };
  export default Navig;
  