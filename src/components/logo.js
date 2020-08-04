import React from "react"
import { Link } from "gatsby"

const Logo = (props) => (

  <div className="site-logo">
    <img src='/assets/logo.svg' alt="logo"></img>
    <Link to="url">{props.title}</Link>

  </div >
)

export default Logo