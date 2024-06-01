import { useState } from "react";
import { useNoteContext } from "./NoteContext";

function FormTambah() {

    const {handleAddData} = useNoteContext();

    const [title, setTitle] = useState("")
    const [note, setNotes] = useState("")

    const handleSubmit = () => {
        handleAddData(title, note);
        setTitle("")
        setNotes("")
    };
    
    return (
        <div className="container" >
            <div className='flex flex-col md:ml-[0px] ml-[60px]'>
                <input
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    type="text"
                    placeholder='title'
                    name='title'
                    className="rounded-lg bg-[#FFFFEC] p-2 mb-4 md:w-[500px] w-[400px] "
                />

                <textarea
                    value={note}
                    onChange={e => setNotes(e.target.value)}
                    name="note"
                    id=""
                    cols="30"
                    rows="5"
                    placeholder='note'
                    className="textarea md:w-[500px] w-[400px]">
                </textarea>

                <button
                    onClick={handleSubmit}
                    className="bg-[#ffffff] text-black text-lg rounded-lg px-5 py-3 mt-4 md:w-[500px] w-[400px]">
                    Add Note
                </button>

                {/* <button
                    onClick={handleCancel}
                    className="bg-[#ffffff] text-black text-lg rounded-lg px-5 py-3 mt-2">
                    Cancel
                </button> */}
            
            </div>
        </div>
    )
}

export default FormTambah;