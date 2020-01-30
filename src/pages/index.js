import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import SEO from "../components/internals/SEO"
import { HomePageContainer } from "../components/home/HomePageContainer"
import { AlertBox } from "../components/home/AlertBox"


export default () => {
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
    <div>
      <SEO title="Close More Home Advisor Leads With Automated Texts" />
      <HomePageContainer>
        <AlertBox showInputClass={showInputClass} />
      </HomePageContainer>
    </div>
  )
}
