import React from 'react'
import Section from '@/components/Section'

const Contacts = () => {
  return (
    <div className='bg-emerald-700 h-svh pt-12'>Contacts</div>
  )
}


const ContactsSection = () => Section(<Contacts/>, 'contacts', 'CONTACTS')

export default ContactsSection 