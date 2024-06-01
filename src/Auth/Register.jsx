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
            <div className="md:ml-[0px] ml-[40%]">
                <h1 className="judul"> Registrasi</h1>
                <div className=" my-[30px] md:mx-auto  flex flex-col gap-1 md:w-[500px]">
                    <label htmlFor="">Nama</label>
                    <input type="text" className="input md:w-[500px] w-[300px]" placeholder="Masukkan Nama" />

                    <label htmlFor="">Email</label>
                    <input type="email" className="input md:w-[500px] w-[300px] " placeholder="Masukkan Email" />

                    <label htmlFor="">Password</label>
                    <input type="text" className="input md:w-[500px] w-[300px] " placeholder="Masukkan Password" />
                    
                    <button className="bg-[#ffffff] text-black text-lg md:w-[500px] w-[300px] rounded-lg px-5 py-3 mt-2">Registrasi</button>
                </div>
            </div>



        </>
    )
}


