import React, { useEffect, useState } from "react"
import SEO from "../components/internals/SEO"
import { HomePageContainer } from "../components/home/HomePageContainer"
import { AlertBox } from "../components/home/AlertBox"
import {Nav} from "../components/shared-components/Nav"
import { Footer } from "../components/shared-components/Footer"



export default ({location}) => {
  const [showInputClass, setShowInputClass] = useState(false)

  const handleInputClass = () => {
    setShowInputClass(true)
  }

  useEffect(() => {
    setTimeout(() => {
      setShowInputClass(false)
    }, 5000)
  }, [showInputClass])

  return (
    <>
      <SEO title="Close More Home Advisor Leads With Automated Texts" description="Beat your competitors to Home Advisor Leads With Auto Texts"/>
        <Nav handleInputClass={handleInputClass} location={location}/>
      <HomePageContainer>
        {/*<AlertBox showInputClass={showInputClass} />*/}
      </HomePageContainer>
      <Footer/>
    </>
  )
}
