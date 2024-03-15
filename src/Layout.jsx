import { Link, Outlet } from "react-router-dom";
import { useAuth } from "./context/Auth";

export default function Layout({ token, onLogout }) {
    const { isLoggedin } = useAuth()
    const { doLogout} = useAuth()

    const handleLogout = async () => {
        doLogout()
    }

    return (
        <>
            <div className=" bg-[#928564] h-[55px] justify-around py-2 flex  ">
                <h1 className="text-2xl font-bold text-white">Form</h1>

                {isLoggedin ? (
                    <span className="font-bold text-2xl text-white" >Udah login </span>
                ) : (
                    <span className="font-bold text-2xl text-white" >Belum login </span>

                )}

                <nav className=" text-white text-lg flex gap-5 items-center">
                    {token !== null ? null : <Link to={'/Registrasi'} className="font-bold"> <p>Registrasi</p> </Link>}
                    {token !== null ? null : <Link to={'/Login'} className="font-bold">  <p>Login</p> </Link>}
                    <button className="font-bold" onClick={handleLogout} >Logout</button>
                    <Link to={"/Note"}><span className="text-white font-sans hover:text-slate-300">Notes</span></Link>
                    {token !== null ? <Link ><span className="text-white font-sans hover:text-slate-300">Logout</span></Link> : null}
                </nav>
            </div>
            <Outlet />
        </>
    )
}