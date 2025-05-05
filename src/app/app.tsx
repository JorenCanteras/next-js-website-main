import React from 'react'
import Header from "@/components/header/header"; 
import Landing from "@/components/header/landing";
import Partnership from "@/components/header/partnership"; 
import Services from "@/components/header/services"; 
import Outreach from "@/components/header/outreach"; 
import MoreServices from "@/components/header/moreservices"; 
import Reviews from "@/components/header/reviews";
import FAQ from "@/components/header/faq";
import Blog from "@/components/header/blog";
import Newsletter from '@/components/header/newsletter';
import Footer from '@/components/header/footer';
const App = () => {
  return (
    <div>
      <Header/>
      <Landing/>
      <Partnership/>
      <Services/>
      <Outreach/>
      <MoreServices/>
      <Reviews/>
      <FAQ/>
      <Blog/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default App