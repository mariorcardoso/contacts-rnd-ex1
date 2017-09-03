import React, { Component } from 'react';
import logo from './logo.svg';
// import './App.css';

class ContactList extends Component {
  render() {
    const people = this.props.contacts

    return <ol>
      {people.map(person => (
        <li key={person.name}>{person.name}</li>
      ))}
    </ol>
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <ContactList contacts={[
          { name: 'Michael' },
          { name: 'Ryan' },
          { name: 'Tyler' }
        ]}/>
        <ContactList contacts={[
          { name: 'Amanda' },
          { name: 'Richard' },
          { name: 'Geoff' }
        ]}/>
      </div>
    );
  }
}

export default App;
