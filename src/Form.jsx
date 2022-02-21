import { useState } from "react";


const Form = (props) =>{
    
    const [inputValues , changeInputValues] = useState({
        title : "",
        content : ""
    })

    const addNote = () =>{
        if(inputValues.title != "" && inputValues.content != "")
        {
            props.addNote(inputValues);
            changeInputValues({
                title: "",
                content : ""
            })
        }
        else
        {
            alert("Fill Title and Content !")
        }
    }

    const changeValue = (e)=>{
        let {name , value} = e.target
        changeInputValues( (prevValue)=>{
            return {
                ...prevValue,
                [name] : value
            }
        })
    }

    return<div id="form">
        <input  placeholder="Title" type="text" value={inputValues.title} onChange={changeValue} name="title" />
        <textarea type="text" placeholder="Content" cols="40" rows="5" value={inputValues.content} onChange={changeValue} name="content" />
        <i onClick={addNote} className='button bx bx-plus'></i>
        
    </div>

}

export default Form;