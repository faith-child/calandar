
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

function Form() {
  
  const { isOpen, onOpen, onClose} = useDisclosure();
  
  return (
    <>
    <IconButton isRound aria-label="Add Event" icon="add" size="sm" variantColor="red" onClick={onOpen} />
    <Modal isOpen={isOpen} onClose={onClose} isCentered >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Event</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <EventForm />
        </ModalBody>
      </ModalContent>
    </Modal>
    </>
  )

}


export default Form