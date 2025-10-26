import React from 'react'
import Navbar from '@/components/modules/navbar/Navbar'
import TitleBanner from '@/components/tamplates/TitleBanner/TitleBanner'
import Footer from '@/components/modules/footer/Footer'
import NavbarResponsive from '@/components/modules/navbar/NavbarResponsive'
const page = () => {
  return (
 <>
 <Navbar/>
 <NavbarResponsive/>
 <TitleBanner title='دسته گل vip'/>
 <Footer/>
 </>
  )
}

export default page