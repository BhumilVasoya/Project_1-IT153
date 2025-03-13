import React from 'react'

const Contact = () => {
  return (
    <footer className="footer" id="contact">
            <div className="footer__col">
              <h4>CONTACT US</h4>
              <ul className="footer__links">
                <li><a href="mailto:thefitclub@gmail.com">thefitclub@gmail.com</a></li>
              </ul>
              <div className="footer__socials">
                {[
                  { img: "images/facebook.png", alt: "facebook" },
                  { img: "images/instagram.png", alt: "instagram" },
                  { img: "images/youtube.png", alt: "youtube" },
                  { img: "images/twitter.png", alt: "twitter" },
                ].map((item, index) => (
                  <a href="/" key={index}>
                    <img src={item.img} alt={item.alt} />
                  </a>
                ))}
              </div>
            </div>
          </footer>
  )
}

export default Contact
