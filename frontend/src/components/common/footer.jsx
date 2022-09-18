import React from 'react'
import logo from "../../assets/img/Hunger_captian_footer_logo.png"
const Footer = () => {
  return (
    <div><footer>
    <div className="bottom_logo">
        <img src={logo} alt="" />
        <p>Premium Quality food at the best and most affordable price.</p>
        <p> We have a new Offer every day for 365 days</p>
        <h4>Contact</h4>
        <h6>E-mail:quickfood@Hungercaptian.com | Hotline : +1131138138</h6>
    </div>
    <div className="bottom">
        <p>DESIGN BY HUNGER CAPTIAN -© 2022. ALL RIGHTS RESERVED</p>
    </div>
</footer>
</div>
  )
}

export default Footer