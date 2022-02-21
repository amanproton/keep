import react, { useState } from "react";
import Header from './Header'
import Form from './Form'
import NotesContainer from './NotesContainer'

const App = ()=>{

    const [listOfNotes , updateListOfNotes] = useState([])

    const addNote = (newNote)=>{
        console.log(newNote)
        updateListOfNotes( (prevValue)=>{
            return[
                ...prevValue,
                newNote
            ]
        })
    }

    return<>
        <Header />
        <Form addNote={addNote} />
        <NotesContainer notes={listOfNotes} delete={updateListOfNotes}/>
    </>

}

export default App;

