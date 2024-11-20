import React from 'react'
import ContactUsForm from './section/form'
import ContactUsInfo from './section/details'
import ContactBanner from './section/banner'

const ContactUsPage = () => {
  return (
	<div>
		<ContactBanner/>
		<ContactUsInfo/>
		<ContactUsForm/>
	</div>
  )
}

export default ContactUsPage