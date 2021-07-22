import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

const backendURL = 'http://localhost:8082/api/notes/'
class CreateNoteItem extends Component {
    constructor() {
        super();
        this.state = {
            content: '',
            status: '',
            createdDate: '',
            updatedDate: ''
        };
    }
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();
        const data = {
           
            content: this.state.content,
            status: this.state.status,
            createdDate: Date.now,
            updatedDate: Date.now
        };
        // axios.post('http://localhost:8082/api/notes', data)
        //     .then(res => {
        //         this.setState({
        //             content: '',
        //             status: '',
        //             createdDate: '',
        //             updatedDate: ''

        //         })
        //         this.props.history.push('/');
        //         })
        //         .catch(err => {
        //         console.log("Error in CreateNote!");
        // })
        axios.post((backendURL + '?id=' + this.props.id), {
            status: 'incomplete',
            content: '',
            createdDate: Date.now(),
            updatedDate: Date.now(),
        });
    };
    render() {
        return (
            <div className="CreateNote">
                <tr>
                    <td>
                        <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Enter note content"/>
                    </td>
                    <td>
                        <input type="submit" value="Add note" />
                    </td>
                </tr>
                  

                
            </div>
        );
    }

    
}
export default CreateNoteItem;