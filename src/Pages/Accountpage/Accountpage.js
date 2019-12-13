import React, { Component } from 'react';
import Title from './Title';
import Form from './Form';
import List from './List';



class Accountpage extends Component {
  render(){
    return (
      <div className="container-fluid">
        <Title/>
        <hr/>
        <Form />
        <br/>
        <List />
      </div>
    );
  }
}

export default Accountpage;