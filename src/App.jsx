import Register from './Auth/Register'
import Note from './note/Note'
import Login from './Auth/Login'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import { useAuth } from './Auth/Auth';
import { NoteProvider } from './note/NoteContext';

function App() {
    // panggil nilai isLoggedin dari context
    const { isLoggedin } = useAuth()

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout/>}>
                    {isLoggedin ? (
                        <Route>
                            <Route path={"/Note"} element={  <NoteProvider><Note/></NoteProvider> } />,
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

