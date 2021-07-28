import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';
import NoteItem from './NoteItem'
import CreateNoteItem  from './CreateNoteItemBar';

const backendURL = 'http://localhost:8082/api/notes/all'

class ShowAllNoteItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: []
    };
  }

  componentDidMount() {
    axios
      .get(backendURL)
      .then(res => {
        console.log(res.data)
        this.setState({
          //generatedNotes: res.data backend
          generatedNotes: res.data
        })
      })
      .catch(err =>{
        console.log('Error from ShowAllNoteItems');
      })
  }


  render() {
    const generatedNotes = this.state.generatedNotes;
    console.log(generatedNotes);
    let generatedNotesList=[];

    if(!generatedNotes) {
      generatedNotesList = "there is no Notes";
    } else {
      generatedNotesList = generatedNotes.map((note, k) =>
        <NoteItem note={note} key={note._id} />
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