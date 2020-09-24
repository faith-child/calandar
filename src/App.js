import React from 'react';
import MyCalendar from "./MyCalendar"
import Title from "./Title"
//import AddEvent from "./AddEvent"
import Modal from './Modal'
import  "./styles.css"
// import Eventform from "./Eventform"
 import { ThemeProvider, CSSReset } from "@chakra-ui/core";


class App extends React.Component {
  state = {
    show: false
  }

  showModal = e => {
    this.setState({
      show: true
    })
  }
  render(){
    return (
    <>
      <ThemeProvider>
        <CSSReset/>
          <Title/>
          <br/>
          <button onClick={e =>{
            this.showModal()
          }}>Create Event</button>
          <Modal show ={this.state.show}/>
          <br/>
          <MyCalendar/>
      </ThemeProvider>
  </>
  );
  }
 
}

export default App;
