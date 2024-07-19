import React from 'react'
import {Modal} from './Modal'

function AddAndUpdateContact({isOpen,onClose}) {
  return (
    <div>
    <Modal isOpen={isOpen} onClose={onClose}>Hi hello</Modal>
    </div>
  )
}

export default AddAndUpdateContact
