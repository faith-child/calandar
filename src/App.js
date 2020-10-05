import React from 'react';
import MyCalendar from "./MyCalendar"
import Title from "./Title"
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
      <div class="grid-container">
        <ThemeProvider>
          <CSSReset/>
            <Title/>
            <br/>
            <button className="button" onClick={e =>{ this.showModal() }}> 
              Create Event
            </button>
          
            <Modal onClose={this.showModal} show={this.state.show}/>  
            <br/>
            <MyCalendar/>
        </ThemeProvider>
    </div>
    );
  }
}
export default App;
