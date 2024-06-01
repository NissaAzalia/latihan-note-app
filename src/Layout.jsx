import { Link, Outlet } from "react-router-dom";
import { useAuth } from "./Auth/Auth";

export default function Layout() {
    const { isLoggedin, doLogout } = useAuth()

    return (
        <>
            <div className=" bg-[#928564] h-[55px] justify-around py-2 md:w-[100%] w-[535px] flex  ">
                <h1 className="text-2xl  font-bold text-white">Form</h1>

                {/* {isLoggedin ? (
                    <span className="font-bold text-2xl text-white" >Udah login </span>
                ) : (
                    <span className="font-bold text-2xl text-white" >Belum login </span>

                )} */}

                {isLoggedin ?
                 <>
                    <Link to={"/Note"}><span className="text-white font-bold text-xl  hover:text-slate-300">Notes</span></Link>
                    <Link onClick={() => doLogout()}> <span className="text-white font-bold text-xl  hover:text-slate-300">Logout</span> </Link>
                </> : <>
                    <Link to={'/Registrasi'} className="text-white font-bold font-sans hover:text-slate-300"> <p>Registrasi</p> </Link>
                    <Link to={'/Login'} className="text-white font-sans font-bold hover:text-slate-300">  <p>Login</p> </Link>
                </>}

                
            </div>
            <Outlet />
        </>
    )
}