import NoteItem from './NoteItem'
import FormTambah from './FormTambah'
import FormEdit from './FormEdit'
import { useNoteContext } from './NoteContext'
import { useEffect } from 'react'

function Note() {
  const { 
    notes, 
    currentNoteId, 
    handleUpdate, 
    Edit, 
    handleDelete, 
    handleFetchData, 
    handleAddData, 
    CancelEdit
  } = useNoteContext()


  // const [notes, setNotes] = useState([])
  // const [currentNoteId, setCurrentNoteId] = useState(null)

  // const handleFetchData = async () => {
  //   const apiFetch = await tampilkan();
  //   setNotes(apiFetch.data.data.notes ?? null)
  // }

  // const handleAddData = async (title, content) => {
  //   await addNote(title, content)
  //   handleFetchData()
  // }

  // const handleUpdate = async (id, title, content, writer) => {
  //   await editNote(id, title, content, writer)
  //   handleFetchData()
  // }

  // const handleDelete = async (id) => {
  //   await deleteNote(id);
  //   handleFetchData()
  // }

  // const Edit = (id) => {
  //   setCurrentNoteId(id)
  // }

  // const cancelEdit = () => {
  //   setCurrentNoteId(null);
  // }

  // useEffect(() => {
  //   handleFetchData()
  // }, [])


  return (
    <>
      <div className='mx'>
        <div className="App md:w-[100%] w-auto flex flex-col items-center">
          <h1 className='text-center text-4xl p-5 md:ml-[0px] ml-[200px] mt-[20px] text-black' >Notes</h1>
          {currentNoteId ? <FormEdit 
          targetValue={notes !== null ? notes.filter(e => e.id === currentNoteId)[0] : null} 
          onEdit = { handleUpdate } 
          notes={ notes } 
          onCancel={handleUpdate} /> : 
          <FormTambah onAdd={handleAddData} onCancel={CancelEdit} />}

          <div className='flex flex-row flex-wrap justify-center'>

            {notes ? 
             notes.map((note) =>(
              <NoteItem
                key={note.id}
                id={note.id}
                title={note.title}
                content={note.content}
                onDelete={handleDelete}
                onEdit={Edit} />)): null}

          </div>
        </div>
      </div>

    </>
  )

}


export default Note;