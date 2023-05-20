import Contact from '@/components/contact/Contact'
import Hero from '@/components/hero/Hero'
import Layout from '@/components/layout/Layout'
import Portfolio from '@/components/portfolio/Portfolio'
import Services from '@/components/services/Services'
import Why from '@/components/why/Why'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const index = () => {
  return (
    <>
    <Layout>
        <Hero/>
        <Services/>
        <Portfolio/>
        <Why/>
        <Contact/>
        </Layout>
    </>
  )
}

export default index