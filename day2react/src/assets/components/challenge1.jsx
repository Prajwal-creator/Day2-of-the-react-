import React from "react";
import { useState } from "react";

const Login=()=>{
    const[credss,setcredss] =useState({email:"",password:""})
    const[datas,setdatas] =useState(null)

    function display(email,password){
        setdatas({
            email:email,
            password:password
    })
        
    }

    return(
        <div>
            <input type="text" placeholder="email" onChange={(e)=>{
                setcredss((credss)=>({
                    ...credss ,email: e.target.value
                }))
            }}/>
            <input type="text" placeholder="password" onChange={(e)=>{
                setcredss((credss)=>({
                    ...credss ,password: e.target.value
                }))
            }}/>
            <button type="button" onClick={()=>display(credss.email ,credss.password)}>Click Here</button>
            {datas ? (
                <div>
                    <h1>{datas.email}</h1>
                    <h1>{datas.password}</h1>
                </div>
            ): <h1>No data not found</h1>} 

        </div>
    )

}

export default Login;