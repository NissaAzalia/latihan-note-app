import { useEffect, useState } from "react";
import { useNoteContext } from "./NoteContext";

export default function FormEdit({ onEdit, notes, onCancel, targetValue }) {
    const { handleUpdate, Edit, CancelEdit } = useNoteContext()

    const [title, setTitle] = useState(targetValue !== null ? targetValue.title : null)
    const [note, setNotes] = useState(targetValue !== null ? targetValue.content : null)
    const [writer, setWriter] = useState(targetValue !== null ? targetValue.writer : null);

    useEffect(() => {
        const noteToEdit = notes !== null ? notes.find((note) => note.id === targetValue.id) : null;
        if (noteToEdit !== null) {
            setTitle(noteToEdit.title)
            setNotes(noteToEdit.content)
            setWriter(noteToEdit.writer)
        } else {
            setTitle("")
            setNotes("")
            setWriter("")
            CancelEdit()
        }
    }, [targetValue]);

    const handleEdit = () => {
        const konfirm = confirm("APakah anda yakin")
        if (konfirm) {
            onEdit(targetValue.id, title, note,writer);
            setTitle("")
            setNotes("")
            CancelEdit()
        }
    };

    // const cancelHandle = ()=>{
    //     titleInput.current.value = "";
    //     contentInput.current.value = "";[]
    //     onCancel()
    // }

    return (
        <div className="container" >
            <div className='flex flex-col gap-[10px]'>
                <input
                    value={writer}
                    type="hidden"
                    className='rounded-lg bg-[#FFFFEC] p-2 mb-[20px] w-[100px]'
                />

                <input
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    type="text"
                    placeholder='title'
                    name='title'
                    className='rounded-lg bg-[#FFFFEC]  mb-[20px] w-[100px]'
                />

                <textarea
                    value={note}
                    onChange={e => setNotes(e.target.value)}
                    name="note"
                    id=""
                    cols="30"
                    rows="5"
                    placeholder='note'
                    className='textarea'>
                </textarea>
                

                <button
                    onClick={handleEdit}
                    className="bg-[#ffffff] text-black text-lg rounded-lg px-5 py-3 mt-4">
                    Edit Note
                </button>

                <button
                    onClick={CancelEdit}
                    className="bg-[#ffffff] text-black text-lg rounded-lg px-5 py-3 mt-2">
                    Cancel
                </button>
            </div>
        </div>
    );
}

