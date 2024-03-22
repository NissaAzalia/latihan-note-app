import { handleLogin, setTokens } from "../api";
import { useState } from "react";
import { useAuth } from "./Auth";


export default function Login (){
    const { doLogin } = useAuth()

    const[email,setEmail] = useState();
    const[password,setPassword] = useState();

    const handleClick = async()=>{
        doLogin(email,password)
        // const apiLogin = await handleLogin(email,password);
        // if(apiLogin.status === 200){
        //     setEmail("")
        //     setPassword("")
        //     onLogin(apiLogin.data.data.accessToken)
        //     setTokens(apiLogin.data.data.accessToken)
        //     alert(apiLogin.data.message)
        // }else{
        //     const {email = [],password=[]}= apiLogin.data.errors;
        //     const err = [...email,...password];
        //     alert(err.join("/n"));
        // } 
    }

    return (
        <>
        <div className="">
                <h1 className="judul"> Login</h1>
                <div className=" my-[30px] mx-auto flex flex-col gap-1 w-[500px]">
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" className="input" placeholder="Email" />
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" className="input" placeholder="Password" />
                    <button onClick={handleClick} className="bg-[#ffffff] text-black text-lg rounded-lg px-5 py-3 mt-2">Login</button>
                </div>
            </div>
        </>
    )
}