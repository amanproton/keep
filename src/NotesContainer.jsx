import { useState } from "react";
import Note from "./Note";
const NotesContainer = (props) => {

    const deleteNote = (index)=>{
        props.delete( (prev)=>{
            let a = [...prev];
            a.splice(index , 1);
            return a;
        })
    }

    return <div id="notesContainer">
        {
            props.notes.map((value, index) => {
                return <Note
                    id={index}
                    title={value.title}
                    content={value.content}
                    key={index}
                    delete={deleteNote}
                />
            })
        }
    </div>

}

export default NotesContainer;