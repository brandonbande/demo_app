import React from 'react'
import db from '../appwrite/databases'

const NoteForm = ({setNotes}) => {

    const handleAdd = async (e) => {
        e.preventDefault()
        const noteBody = e.target.body.value
        try {
            const payload = {body: noteBody}
            const response = await db.notes.create(payload)
            setNotes((prevState) => [response , ...prevState] )
        } catch (error) {
            console.log(error)
        }
    }
    
  return (
    <div>
        <form onSubmit={handleAdd}>
            <textarea name='body' placeholder='Enter something'></textarea>
            <button type='submit'>Save</button>
        </form>
    </div>
  )

}


export default NoteForm