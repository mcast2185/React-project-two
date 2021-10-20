import React, { Component } from 'react';
import {JournalEntry} from './journal_entry'


const rawJournalData = [
  {title: "post one", content: "post cont", status: "draft"},
  {title: "post two", content: "post cont", status: "published"},
  {title: "post three", content: "post cont", status: "published"},
  {title: "post four", content: "post cont", status: "draft"}
];



export default class JournalList extends Component {
  constructor(props){
    super(props);
    this.state = {
      journalData: rawJournalData,
      isOpen: true
    };
  }

  showAllEntries(){
    this.setState({journalData: rawJournalData, isOpen: true})
  }
  
  clearEntries(){
    this.setState({journalData: [], isOpen: false})
  }

  toggleStatus(){
    if (this.state.isOpen) {
      this.setState({ journalData: [], isOpen: false })
    } else {
      this.setState({ journalData: rawJournalData, isOpen: true })
    }
  }
  
  render(){
    const journalEntries = this.state.journalData.map((journal) =>{
      return (
        <div >
          <JournalEntry 
            title={journal.title} 
            content={journal.content}
          />
        </div>
      );
    });
    return (
      <div>
        <h1>{this.props.heading}</h1>
        {journalEntries}

        <button onClick={() => this.clearEntries()}>Clear journal entries</button>
      </div>
    )
  }
}
