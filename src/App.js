import React from 'react';
import MyCalendar from "./calendar/MyCalendar"
import Title from "./calendar/Title"
import Modal from './addEvent/Modal'
import  "./calendar/styles.css"
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

  hideModal = () => {
    this.setState({ show: false });
     };

  render(){
    return (
      <div className="grid-container">
        <ThemeProvider>
          <CSSReset/>
            <Title/>
            <br/>
            {/* <button className="button" onClick={e =>{ this.showModal() }}> 
              Create Event
            </button> */}
            <Modal show={this.state.show} handleClose={this.hideModal}>
            </Modal>  
            <Modal onClose={this.showModal} show={this.state.show}/>  
            <br/>
            <MyCalendar />
        </ThemeProvider>
    </div>
    );
  }
}
export default App;
