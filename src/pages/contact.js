import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact"/>
      <h1>Contact</h1>
      <p>These are the contact details</p>
      <p>Open <a href="https://google.com">Google</a></p>
    </Layout>
  )
}

export default ContactPage