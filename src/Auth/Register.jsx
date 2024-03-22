import { useState } from "react"
import { Register } from "../api";


export default function Registrasi() {

    // const [name,setName] = useState("");
    // const [email,setEmail] = useState("");
    // const [password,setPassword] = useState("");

    // const handleRegister = async () => {
    //     const apiRegis = await Register (name,email,password);
    //     if(apiRegis.status === 201){
    //         setName("")
    //         setEmail("")
    //         setPassword("")
    //         alert(apiRegis.data.message)
    //     }else{
    //         const {name= [],email = [], password = []} = apiRegis.data.errors;
    //         const err = [...name,...email,...password]
    //         alert(err.join("\n"));
    //     }
    // }

    

    return (
        <>
            <div className="">
                <h1 className="judul"> Registrasi</h1>
                <div className=" my-[30px] mx-auto flex flex-col gap-1 w-[500px]">
                    <label htmlFor="">Nama</label>
                    <input type="text" className="input" placeholder="Masukkan Nama" />

                    <label htmlFor="">Email</label>
                    <input type="email" className="input" placeholder="Masukkan Email" />

                    <label htmlFor="">Password</label>
                    <input type="text" className="input" placeholder="Masukkan Password" />
                    
                    <button className="bg-[#ffffff] text-black text-lg rounded-lg px-5 py-3 mt-2">Registrasi</button>
                </div>
            </div>



        </>
    )
}


