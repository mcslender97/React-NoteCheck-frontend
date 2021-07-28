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
            isCompleted: false,
            createdDate: Date.now(),
            updatedDate: Date.now()
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(e)  {
        this.setState({ content: e.target.value });
    }

    handleSubmit(e) {
        
        const data = {       
            isCompleted: this.state.isCompleted,
            content: this.state.content,
            createdDate: Date.now(),
            updatedDate: Date.now()
        };
        axios.post(backendURL, data)
            .then(res => {
                this.setState({
                    content: '',
                    isCompleted: false,
                    createdDate:  Date.now(),
                    updatedDate:  Date.now()

            })
                this.props.history.push('/');
            })
                .catch(err => {
                console.log("Error in CreateNote!");
        })
        e.preventDefault();
    };
    render() {
        return (
            <form className="CreateNoteBar" onSubmit={this.handleSubmit}>
                
                <div>
                    
                        <div>
                            <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Enter note content"/>
                        </div>
                        <div>
                            <input type="submit" value="Add note" />
                        </div>
                    
                    </div>
                    
            </form>
        );
    }

    
}
export default CreateNoteItem;