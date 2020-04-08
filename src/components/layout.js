import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import SocialsNetworks from "./socials-networks"
import "../styles/main.css"

export default function Layout({ children }) {

  return (
    <>
      <Header />
      <main>{children}</main>
      <SocialsNetworks /> 
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}