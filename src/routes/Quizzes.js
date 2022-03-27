import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PricingCards from '../components/Quizzes'
import HeroImage from '../components/HeroImage'

const Pricing = () => {
    return (
        <div>
            <Navbar />
            <HeroImage heading='QUIZZES.' text='Choose your quizz.' />
            <PricingCards />
            <Footer />
        </div>
    )
}

export default Pricing
