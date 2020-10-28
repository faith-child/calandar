
import React from 'react'


import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  IconButton,
} from '@chakra-ui/core';
import EventForm from './EventForm'

function AddEventForm({defaultDayValue}) {

  
  const { isOpen, onOpen, onClose} = useDisclosure();
  
  return (
    <>
    <IconButton isRound aria-label="Add Event" icon="add" size="sm" variantColor="red" onClick={onOpen} />
    <Modal isOpen={isOpen} onClose={onClose} isCentered  blockScrollOnMount={true} >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Event</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <EventForm defaultDayValue={defaultDayValue} />
        </ModalBody>
      </ModalContent>
    </Modal>
    </>
  )

}


export default AddEventForm