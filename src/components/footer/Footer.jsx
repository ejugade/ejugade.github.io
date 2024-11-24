import React from 'react'
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Thank You for Visiting</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#qualifications" className="footer__link">Qualifications</a>
                </li>

                <li>
                    <a href="#services" className="footer__link">Projects</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="https://www.linkedin.com/in/esha-jugade-42b79b1a4/" className="footer__social-icon" target='_blank'>
                    <i class="bx bxl-linkedin"></i>
                </a>
                
                <a href="https://gitlab.com/purdue-cs536/fall-2024/public" className="footer__social-icon" target='_blank'>
                    <i class="bx bxl-github"></i>
                </a>

                <a href="https://gitlab.com/purdue-cs536/fall-2024/public" className="footer__social-icon" target='_blank'>
                    <i class="bx bxl-gmail"></i>
                </a>

                <a href="https://scholar.google.com/citations?user=H0OmdV0AAAAJ&hl=en" className="footer__social-icon" target='_blank'>
                <i class="uil uil-graduation-cap"></i>
            </a>
            </div>
            <span className='footer__copy'>
            &copy; Esha. All rights reserved.
            </span>
        </div>
    </footer>

  )
}

export default Footer