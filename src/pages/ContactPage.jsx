import React from 'react'
import Navbar from '../components/Navbar'
import ContactForm from '../components/ContactForm'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'

const ContactPage = () => {
  return (
    <div>
        <Navbar />
        <ContactForm />
        <FAQ />
        <Footer />
    </div>
  )
}

export default ContactPage