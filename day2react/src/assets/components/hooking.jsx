import React from "react";
import { useState } from "react";
import Allert from "./alert";

const Hooking =()=>{
    const [count,setcount] = useState(20)
    return(
        <div>
            <h1>{count}</h1>
            <button type="button" onClick={()=>setcount((count)=>count+1)}>{count}</button>
            <Allert num={count}/>
        </div>
    )
}

export default Hooking