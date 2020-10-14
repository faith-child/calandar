import React from 'react';
import MyCalendar from "./calendar/MyCalendar"
import Title from "./calendar/Title"
// import Modal from './addEvent/Modal'
import  "./calendar/styles.css"
import { ThemeProvider, CSSReset,  Flex } from "@chakra-ui/core";


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
      <ThemeProvider>
      <CSSReset/>
      <Flex direction="column" align="center" justify="center">
          <Flex  >
            <Title/>  
          </Flex>
          <Flex >
            <MyCalendar  />
          </Flex>
      </Flex>
    </ThemeProvider>
    );
  }
}
export default App;
