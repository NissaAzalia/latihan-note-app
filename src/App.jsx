import Register from './pages/Register'
import Note from './pages/Note'
import Login from './pages/Login'
import { BrowserRouter,Navigate, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import { useEffect, useState } from 'react';
import { getToken } from './api';

function App() {
    const [token, setToken] = useState(null);
    // moment 

    const handleLogin = (token) => {
        setToken(token);
    }

    const handleLogout = () => {
        setToken(null)
        localStorage.removeItem('token');
    }

    useEffect(() => {
        const token = getToken()
        setToken(token)
    }, [])


    return (
        <>
           



            <BrowserRouter>
                <Routes>
                    <Route element={<Layout token={token} onLogout={handleLogout} />} >
                        {token !== null ?
                            <Route>
                                <Route path={"/note"} element={<Note />} />
                                <Route path="*" element={<Navigate to={"/note"} />} />
                            </Route>
                            : <Route path={"/note"} element={<h1 className='text-white grid place-items-center mt-[16rem] font-bold text-[4rem]'>Not Found</h1>} />}
                        {
                            token !== null ? null :
                                <Route>
                                    <Route path={"/register"} element={<Register />} />
                                    <Route path={"/login"} element={<Login onLogin={handleLogin} />} />
                                </Route>
                        }
                    </Route>
                    <Route path="*" element={<Navigate to={"/login"} />} />
                </Routes>
            </BrowserRouter>
        </>
    )
                    }

export default App;

