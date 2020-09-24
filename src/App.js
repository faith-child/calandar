import React from 'react';
import MyCalendar from "./MyCalendar"
import Title from "./Title"
import {
  Button
} from "@chakra-ui/core";
import Modal from './Modal'
import  "./styles.css"
import { ThemeProvider, CSSReset } from "@chakra-ui/core";


class  App extends React.Component {
 
  state = {
    show: false
  }

  showModal = e => {
    this.setState({
      show: !this.state.show
    })
  }
  render(){
    return (
      <>
        <ThemeProvider>
          <CSSReset/>
            <Title/>
            <br/>
            <Button onClick={e =>{
              this.showModal()
            }}>Create Event</Button>
          
            <Modal onClose={this.showModal} show={this.state.show}/>  
            <br/>
            <MyCalendar/>
        </ThemeProvider>
    </>
    );
  }
}
export default App;
