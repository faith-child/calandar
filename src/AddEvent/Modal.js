

import { Box } from '@chakra-ui/core';
import React from 'react'
import Eventform from '../addEvent/EventForm'
class Modal extends React.Component {
  
  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };
  
  render(){
    if(!this.props.show){
      return null
    }
    return (
      <Box bg="tomato">
        <Eventform/>
      </Box>
      // <section className="modal-main">
      //   <button onClick={handleClose}>close</button>
      // </section>
  );
  }
    
  };

export default Modal