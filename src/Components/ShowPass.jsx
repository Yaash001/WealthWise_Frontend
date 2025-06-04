import React from "react";

function Eye({toggleVisibility}) {
    return(
<span onClick={toggleVisibility}> 👁️ </span>
    );
    
}

export default Eye;