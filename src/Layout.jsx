import { Link, Outlet } from "react-router-dom";

export default function Layout({ token, onLogout }) {
    return (
        <>
            <div className=" bg-[#928564] h-[55px] justify-around py-2 flex  ">
                <h1 className="text-2xl font-bold text-white">Form</h1>
                <nav className=" text-white text-lg flex gap-5 items-center">
                    {token !== null ? null : <Link to={'/Register'} className="font-bold"> <p>Registrasi</p> </Link>}
                    {token !== null ? null : <Link to={'/Login'} className="font-bold"> <p>Login</p> </Link>}
                    <Link to={"/Note"}><span className="text-white font-sans hover:text-slate-300">Notes</span></Link>
                    {token !== null ? <Link onClick={() => onLogout()}><span className="text-white font-sans hover:text-slate-300">Logout</span></Link> : null}
                </nav>
            </div>
            <Outlet />
        </>
    )
}