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
        
        <Link to='/Home'>HOME</Link>
    </div>
</nav>

    );   
  };
  export default Navig;
  