import React, { Component } from 'react';

import JournalList from './journals/journal_list';


export default class App extends Component {
  constructor(){
    super();
    this.state = {
      banner: [
        {header: "Welcome to React"},
        {label: "React-Project-Two"}
      ]
    }
  }



  render() {
    return (
      <div className='app'>
        <h1>{"My Intro"}</h1>
        <JournalList key={Math.random()} heading={'PostMaloney'}/>
      </div>
    );
  }
}