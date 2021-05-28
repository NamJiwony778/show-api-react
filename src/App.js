import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import { Course } from './components/course/course.component';
import './App.css'
import { Header } from './components/header/header.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      courses: []
    };
  }

  componentDidMount() {
    fetch('https://api.sampleapis.com/codingresources/codingResources')
    .then(response => response.json())
    .then(codingResources => this.setState({ courses: codingResources }))
  }
  
  render() {
    return (
      <div className="App">
         <Header/>
          <Table hover responsive="sm">
            <thead>
              <tr>
              <th>ID</th>
              <th>Details</th>
              <th>Description</th>
              <th>URL</th>
              <th>Types</th>
              <th>Topics</th>
              <th>Levels</th>
              </tr>
            </thead>
            <tbody>
              <Course courses={this.state.courses}/>
            </tbody>
          </Table>
      </div>
    );
  }
}

export default App;
