import React from 'react'
import './Contact.css'
// Component Form with Chakra UI
import ContactForm from '../../components/contact_form/ContactForm'

import { Box } from '@chakra-ui/react'
const Contact = () => {
  return (
    <>  
      <div className='webapp__contact'>
        <h2>Contact Us ...</h2>
        <Box p={4}>
            <ContactForm />
        </Box>
      </div>  
    </>
  )
}

export default Contact