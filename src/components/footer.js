import React from "react"
import { Link } from "gatsby"
import { RiHeart2Line } from "react-icons/ri";

const Footer = () => (
  <footer className="site-footer">
    <div className="container">
      <p>A LR Dairy. Made with <span className="icon -love"><RiHeart2Line /></span> by <Link to="/">olliesworld.rocks</Link></p>
    </div>
  </footer>
)

export default Footer