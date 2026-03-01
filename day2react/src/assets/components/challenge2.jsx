import React, { useState } from "react";

function Chal(){
    const [pass,setpass]=useState("")
    return(
        <div>
              <input type="text" placeholder="enter the password" onChange={(e)=>setpass(e.target.value)}/>
              {
                pass.length>=8? <h1>password is greater ok!</h1> : <h1>password is too short</h1>
              }
        </div>
    )
}

export default Chal;