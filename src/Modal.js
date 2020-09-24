

import React from 'react'
import Eventform from './Eventform'
class Modal extends React.Component {
  
  

  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };
  
  render(){
    if(!this.props.show){
      return null
    }
    return (
      <div>
        <Eventform/>
      </div>
      // <section className="modal-main">
      //   <button onClick={handleClose}>close</button>
      // </section>
  );
  }
    
  };

export default Modal