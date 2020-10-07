
import React from "react";
import Modal from'./Modal'
import { Button } from "@chakra-ui/core";
import Eventform from "./AddEvent/Eventform"

class AddEvent extends React.Component{
    // state = { show: false };

    
    // showModal = () => {
    //     this.setState({ show: true });
    //   };
    
    //   hideModal = () => {
    //     this.setState({ show: false });
    //   };
    
    render() {
        return (
          <main>
            <h1>React Modal</h1>
            <Modal /*show={this.state.show} handleClose={this.hideModal}*/>
                <Eventform/>
            </Modal>
            <Button /*onClick={this.showModal} */variantColor="blue" variant="solid" p={} >Create Event</Button>
          </main>
        );
      }
    }   
export default AddEvent
