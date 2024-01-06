import React from 'react'
import './Contact.css'
// Component Form with Chakra UI
import ContactForm from '../../components/contact_form/ContactForm'

import { Box } from '@chakra-ui/react'
const Contact = () => {
  return (
    <>
        <Box p={4}>
            <ContactForm />
        </Box>
    </>
  )
}

export default Contact