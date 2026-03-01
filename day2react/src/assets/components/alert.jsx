import React from "react";
import { useState } from "react";

function Allert({num}){
    const [creds,setcreds] = useState("")
    return(
        <div>
            <input type="text" value={creds} onChange={(e)=>setcreds(()=>e.target.value)} placeholder="enter the username"/>
            <input type="text" onChange={(e)=>setcreds(()=>{
                console.log(e.target.value)
                return e.target.value;
            })} value={creds} placeholder="enter the password"/>
            <button type="submit" onClick={(e)=>setcreds(e.target.value="")}>{num}</button>
        </div>
    )
}

export default Allert;