import React from 'react'
import './HomePageContainer.scss'
import { MainBanner } from './MainBanner'
import { Mission } from './Mission'
import { ContactContainer } from '../Contact/ContactContainer'

export const HomePageContainer = () => {

  return (
    <>
      <div className="mb-5">
        <MainBanner />
      </div>
      <div className="mb-5">
        <Mission />
      </div>
      {/* <div className="mb-5">
        <Review />
      </div> */}
      <ContactContainer />
    </>
  )
}
