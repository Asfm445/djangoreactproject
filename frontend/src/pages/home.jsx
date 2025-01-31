import React, { useEffect, useState } from 'react'
import api from '../api';
import "../styles/Home.css"
import Note from '../components/Note';
function Home() {
    // const navigate=useNavigate()
    const [notes,setNotes]=useState([]);
    const [content,setContent]=useState("")
    const [title,setTitle]=useState("")
    useEffect(()=>{
        getNote();
    },[])
    const getNote=()=>{
        api.get("api/notes/")
        .then((res)=>res.data)
        .then((data)=>{setNotes(data);console.log(data)})
        .catch((err)=>alert(err))
    }
    const deleteNote=(id)=>{
        api.delete(`/api/note/delete/${id}/`)
        .then((res)=>{
            if(res.status===204) console.log("note deleted")
                else alert("failed to delete note.")
            getNote()
        }).catch((error)=>alert(error))
    }
    const createNote=(e)=>{
        e.preventDefault()
        api.post("api/notes/",{content,title}).then((res)=>{
            if(res.status===201) console.log("note created")
            else alert("failed to create")
            getNote()
            setContent("")
            setTitle("")
        }).catch((err)=>alert(err))

    }
    return ( <div>
        <div>
            <div className="logout-h2">
            <h2 className='note'>Notes</h2>
            <div><a href="/logout" className='logout' onSubmit={(e)=>{
                e.preventDefault()
            }}>logout</a></div>
            </div>
            {notes.map((el)=><Note note={el}  onDelete={deleteNote} key={el.id}></Note>)}
        </div> 
        <h2 className='head'>create a Note</h2>
        <form onSubmit={createNote}>
            <label htmlFor='title'>title:</label>
            <br />
            <input 
            type='text' 
            id='title' 
            name='title' 
            required 
            onChange={(e)=>setTitle(e.target.value)}
            value={title}
            ></input>
            <br />
            <label htmlFor='content'>content:</label>
            <br />
            <textarea 
            type='text' 
            id='content' 
            name='content' 
            required 
            onChange={(e)=>setContent(e.target.value)}
            value={content}
            ></textarea>
            <br />
            <button type='submit'>submt</button>
        </form>
    </div> );
}

export default Home;