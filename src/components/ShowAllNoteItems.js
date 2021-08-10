import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';
import NoteItem from './NoteItem'
import CreateNoteItem  from './CreateNoteItemBar';

const backendURL = 'http://localhost:8082/api/notes'

class ShowAllNoteItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      generatedNotes: []
    };
    this.deleteHandler = this.deleteHandler.bind(this)
  }

  componentDidMount() {
    axios
      .get(backendURL+"/all")
      .then(res => {
        console.log(res.data)
        this.setState({
          generatedNotes: res.data
        })
      })
      .catch(err =>{
        console.log('Error from ShowAllNoteItems');
      })
  }
  deleteHandler(id) {
    console.log("Child sent request to deleteHandler")
    
    this.setState(prevState => ({
      generatedNotes : prevState.generatedNotes.filter(note => note._id!==id)
    }))
    axios.delete(backendURL+"?id="+id)
  }


  render() {
    const generatedNotes = this.state.generatedNotes;
    
    let generatedNotesList=[];

    if(!generatedNotes) {
      generatedNotesList = "There are no Notes";
    } else {
      generatedNotesList = generatedNotes.map((note, k) =>
        <NoteItem note={note} key={note._id} onDelete={this.deleteHandler}/>
      );
    }
    return (
      <div className="AllNotes">
        <div className="container">
              <CreateNoteItem/>
              {generatedNotesList}
        </div>
      </div>
    );
  }
}

export default ShowAllNoteItems;