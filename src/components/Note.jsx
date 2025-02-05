import React,{useState} from 'react'
import db from '../appwrite/databases'

const Note = ({noteData , setNotes}) => {
    const [note , setNote] = useState(noteData)

    const handleUpdate = async () => {
        const completed = !note.completed
        db.notes.update(note.$id , {completed})
        setNote({...note , completed : completed})
    }

    const handleDelete = async () => {
         db.notes.delete(note.$id)
         setNotes((prevState) => prevState.filter((n) => n.$id !== note.$id))

    }


  return (
        <div key={noteData.$id}>
            <span onClick={handleUpdate}>
                {note.completed? <s>{note.body}</s> : note.body}
            </span>
            <span><button onClick={handleDelete}>Delete</button></span>
        </div>
  )
}

export default Note