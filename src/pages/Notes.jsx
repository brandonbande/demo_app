import React,{useState , useEffect} from 'react'
import NoteForm  from '../components/NoteForm'
import db from '../appwrite/databases'
import { Query } from 'appwrite'
import Note from '../components/Note'

const Notes = () => {

    const [notes , setNotes] = useState([])

    useEffect(() => {
        init()
    }, [])


    const init = async () => {
        const response = await db.notes.list([
            Query.orderDesc('$createdAt')
        ])
        setNotes(response.documents)
    }
  return (
    <div>

        <NoteForm setNotes={setNotes} />

        <div>
        {
            notes.map((note) => {
                return (
                    <Note noteData={note}  key={note.$id} setNotes={setNotes}/>
                )
            })
        }
        </div>
    </div>
  )
}

export default Notes