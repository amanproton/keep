const Note = (props) =>{

    return <div className="note" >
        <div className="title">{props.title}</div>
        <div className="content">{props.content}</div>
        {/* <div><button className="button" onClick={()=>{props.delete(props.id)}}>delete</button></div> */}
        <div onClick={()=>{props.delete(props.id)}} style={{"alignSelf":"flex-end"}} ><i className='bx bx-trash button'></i></div>
    </div>

}


export default Note;