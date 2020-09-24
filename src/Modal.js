

import React from 'react'
import Eventform from './Eventform'
class Modal extends React.Component {
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