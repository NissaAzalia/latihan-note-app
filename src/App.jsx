import Register from './pages/Register'
import Note from './pages/Note'
import Login from './pages/Login'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import { useAuth } from './context/Auth';

function App() {
    // panggil nilai isLoggedin dari context
    const { isLoggedin } = useAuth()

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout/>}>
                    {isLoggedin ? (
                        <Route>
                            <Route path={"/Note"} element={<Note />} />,
                            <Route path="/Login" element={<Navigate to={"/Note"} />} />
                        </Route>
                    ) : (
                        <>
                            <Route path={"/Registrasi"} element={<Register />} />
                            <Route path={"/Login"} element={<Login/>} />
                            <Route path="*" element={<Navigate to={"/Login"} />} />
                        </>
                    )}
                </Route>
            </Routes>

        </BrowserRouter>

    )
}


export default App;

