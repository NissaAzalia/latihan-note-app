import { createContext, useState, useEffect, useContext} from "react";
import {  addNote, deleteNote, editNote, tampilkan } from "../api";

// nilai default
const initialNoteState = {
    notes: [],
    currentNoteId: null,
    handleFetchData: () => {},
    handleUpdate: () => {},
    Edit: () => { },
    handleDelete: () => {},
    handleAddData: () => {},
    handleSubmit:()=>{},
    handleCancel: ()=>{},
    CancelEdit: () => { },
}

const NoteContext = createContext(initialNoteState)

const useNoteContext = () => {
    return useContext(NoteContext);
}

// buat provider
const NoteProvider = ({ children }) => {
    // state
    const [notes, setNotes] = useState([])
    const [currentNoteId, setCurrentNoteId] = useState(null)

    // function
    const handleFetchData = async () => {
        const apiFetch = await tampilkan();
        setNotes(apiFetch.data.data.notes ?? null)
    }

    // function untuk menambahkan data
    const handleAddData = async (title, note) => {
        await addNote(title,note);
        handleFetchData()
    }

    // function untuk mengedit/ mengupdate data
    const handleUpdate = async (id, title, content, writer) => {
        await editNote(id, title, content, writer)
        handleFetchData()
    }

    // function untuk menghapus data
    const handleDelete = async (id) => {
        await deleteNote(id);
        handleFetchData()
    }

    // function untuk mengambil id yang akan diedit
    const Edit = (id) => {
        setCurrentNoteId(id)
    }

    //
    const CancelEdit = () => {
        setCurrentNoteId(null);
    }

    // function untuk mengSubmit
    const handleSubmit = () => {
        onAdd(title, content);
        setTitle("")
        setNotes("")
    };

    // function mengkosongkan form ketika di cancel
    const handleCancel = ()=>{
        setTitle("")
        setNotes("")
    }


    useEffect(() => {
        handleFetchData()
    }, [])


    return (
        <NoteContext.Provider value={{
            notes,
            currentNoteId,
            handleFetchData,
            handleUpdate,
            Edit,
            handleDelete,
            handleAddData,
            handleSubmit,
            handleCancel,
            CancelEdit,
        }}>
            {children}
        </NoteContext.Provider>
    )
}

export { NoteProvider, useNoteContext }

