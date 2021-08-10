import axios from 'axios';
import React, {useEffect, useState} from 'react';
import '../App.css';
const backendURL = 'http://localhost:8082/api/notes/'





const setCheckBox = function () {
    return (this.props.isCompleted === true)
}

const NoteItem = (props) => {
    const note = props.note;
    const [isChecked, setIsChecked] = useState(note.isCompleted === true)
    

    useEffect(() => {
        axios.put((backendURL + '?id=' + note._id), {
            isCompleted: isChecked
        },[isChecked]);
        
    });
    
    //console.log(noteItem)
    const handleChanged = () => {        
        setIsChecked(!isChecked);
    }
    const handleDelete = () => {
        console.log("Parent rerender request sent!")
        props.onDelete(note._id);
    }

    
    return(
        <div className="NoteItem">
            <div className = "row" id={props._id}>
                <div className="isCompletedCheckBox">
                    <input type="checkbox" checked={isChecked} onChange={handleChanged}></input>           
                </div>
                <div className="noteContent">
                    {note.content}
                </div>
                <div>    
                {note.updatedDate}
                </div>
                <div>
                    <button type="button" onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </div>
    )
};

export default NoteItem;