import axios from 'axios';
import React from 'react';
import '../App.css';
const backendURL = 'http://localhost:8082/api/notes/'



const handleChanged = function (id) {
    //
    switch (this.props.status) {
        case 'incomplete':
            axios.put((backendURL + '?id=' + id), {
                status: 'completed'
            });
            break;
        case 'completed':
        default:
            axios.put((backendURL + '?id=' + id), {
                status: 'incomplete'
            });
            break;
    }


}
const handleCompleted = function (status) {
    //
    switch (status) {
        case 'completed':
        
            break;
        case 'incomplete':
        default:

            break;
    }
}
const setCheckBox = function () {
    return (this.props.status === 'completed')
}

const NoteItem = (props) => {
    const note = props.note;
    
    //console.log(noteItem)

    return(
        <div className="NoteItem">
            <tr id={props._id}>
                <td>
                <input type="checkbox" defaultChecked={setCheckBox()} onChange={handleChanged(this.props._id)}></input>
                </td>
                <td>
                {note.content}<br/>
                {note.updatedDate}
                </td>
                <td>
                    <button></button>
                </td>
            </tr>
        </div>
    )
};

export default NoteItem;